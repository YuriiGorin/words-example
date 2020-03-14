import { Task } from "./Task";
import shuffle from "lodash/shuffle";

export default class Test {
    constructor({ service, ui }) {
        this._service = service;
        this._ui = ui;
        this._ui.setTest(this);
        this._status = "inactive";
        // TODO: написать проверку наличия сохраненной игры и отправку сообщений в UI об этом
        this._service.getTasks()
            .then(data => this._createTasks(data))
            .then(() => {
                this._status = "ready";
                this._ui.sendMessage("test:ready");
             });
        this._tasks = [];
        this._current = -1;
    }

    _createTasks(data) {
        this._tasks = shuffle(data).map(Task.create);
        this._tasks.forEach(task => {
           const checkFn = task.checkAnswer;
           const self = this;
           task.checkAnswer = function(answer) {
               let result = checkFn.call(task, answer);
               if (result) {
                   self._ui.sendMessage("answer:correct");
               } else {
                   self._ui.sendMessage("answer:wrong");
               }
               if (task.isCompleted) {
                   self._current++;
                   // TODO: проверить, есть ли ещё задачи: если задач нет, надо передавать сообщение test:completed
                   self._ui.sendMessage("task:changed");
               }
               return result;
           }
        });
    }

    /**
     *
     * @returns {Task|null}
     */
    get task() {
        if (this._current >= 0) {
            return this._tasks[this._current];
        }
        return null;
    }

    get status() {
        return this._status;
    }

    get ready() {
        return this._status === "ready";
    }

    start() {
        if (this.ready) {
            // запустить таймер, показывать первый вопрос и т.д.
            this._current = 0;
            this._ui.sendMessage("task:changed");
        }
    }

    restore() {
        // TODO: написать код для восстановления игры
    }
}
