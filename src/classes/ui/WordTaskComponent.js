import TaskComponent from "./TaskComponent";

export default class WordTaskComponent extends TaskComponent {
    constructor({ info, question, ui }) {
        // TODO: передать аргументы в родительский конструктор
        super();
        this._ui = ui;
        this._question = question;
        this._info = info;
    }

    /**
     * Метод для отображения задания, UI Controller всегда должен его вызывать
     *
     */
    render() {
        // TODO: написать код для отрисовки  кнопок, полей и т.п.
    }
};
