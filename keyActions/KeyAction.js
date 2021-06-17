class KeyAction {
    constructor(keyCode) {
        this.keycode = keyCode;
    }

    //Runner to support future features like cancellation
    async run(discordMessage, discordClient) {
        await this._run(discordMessage, discordClient);
    }

    async _run(discordMessage, discordClient) {
        throw new Error(`Function >async _run()< is unimplemented in the KeyAction child class >${this.constructor.name}<!`);
    }

}

module.exports = KeyAction
