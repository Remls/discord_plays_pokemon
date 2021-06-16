class KeyAction {
    constructor(keyCode) {
        this.keycode = keyCode;
    }

    //Runner to support future features like cancellation
    async run() {
        await this._run()
    }

    async _run() {
        throw new Error(`Function >async _run()< is unimplemented in the KeyAction child class >${this.constructor.name}<!`);
    }

}

module.exports = KeyAction
