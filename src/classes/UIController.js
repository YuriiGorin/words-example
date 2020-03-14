export default class UIController {
    constructor() {
        this._setOnloadHandler();
        this._onloaded = false;
    }
    /**
     * Для обмена сообщениями обходимо передать экземпляр теста
     *
     * @param {Test} test
     */
    setTest(test) {
        this._test = test;
    }

    /**
     * Функция для обработки сообщений из сервисного слоя
     *
     * @param {string} type тип сообщения, который описывает, что произошло
     * @param {any} payload полезная нагрузка, т.е. любые данные, необходимые UI
     */
    sendMessage(type, payload= null) {
        const handler = `_${type}`;
        if (typeof this[handler] === "function") {
            this[handler]();
        } else {
            console.warn(`There are no handlers for ${type} message.`);
        }
    }

    _setOnloadHandler() {
        window.addEventListener("load", () => {
            if (this._test.ready) {
                this._test.start();
            }
            this._onloaded = true;
        });
    }

    ["_test:ready"]() {
        if (this._onloaded) {
            this._test.start();
        }
    }

    ["_task:changed"]() {
        const { task } = this._test;
        document.write(task.type + "<br>");
        document.write(task.getDescription() + "<br>");
        document.write(task.question);

        // task.checkAnswer("I");

        // TODO: создать компонент для отображения задачи
        // this._component = TaskComponent.create(task.type, { info: task.info, question: task.question });
        // questionContainer - DOM-элемент, в котором нужно отобразить вопрос
        // this._component.render(questionContainer);
    }

    ["_answer:wrong"]() {
        // TODO: сообщить компоненту с задачей об ошибке
        // this._component.displayError();
        console.log("Неправильный ответ");
    }

    ["_answer:correct"]() {
        // TODO: сообщить компоненту с задачей о корректном ответе
        // this._component.displaySuccess();
        console.log("Правильный ответ");
    }
}
