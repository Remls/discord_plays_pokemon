const KeyAction = require("./KeyAction")
const emu = require("robotjs");
const sleep = require("./sleep");

class TapKey extends KeyAction {
    constructor(keyCode, numTaps) {
        super(keyCode);
        this.numTaps = numTaps;
    }

    async _run(discordMessage, discordClient) {
        for (let i = 0; i < this.numTaps; i++) {
            emu.keyTap(this.keycode)
            //console.log(`Tapping ${this.keycode}`);
            await sleep(100);
        }
    }
}

module.exports = TapKey;
