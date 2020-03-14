export default class UIController {
    constructor() {
        this._setOnloadHandler();
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
        console.log(type, payload);
    }

    _setOnloadHandler() {
        window.addEventListener("load", () => {
            if (this._test.ready) {
                this._test.start();
            }
        });
    }
}
