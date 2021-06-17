function queuedAction(action, discordMessage, discordClient) {
    return {action, message: discordMessage, client: discordClient};
}

class ActionQueue {
    constructor() {
        this.actions = [];
        this.running = false;
    }

    async _runQueue() {
        if (this.running)
            return

        this.running = true;

        while (this.actions.length > 0) {
            const {action, message, client} = this.actions.shift()
            await action.run(message, client);
        }

        this.running = false
    }

    add(action, discordMessage, discordClient) {
        if (action) {

            this.actions.push(queuedAction(action, discordMessage, discordClient));

            //This call starts the queue runner, if it isn't already running.
            //Ignore the promise on purpose.
            this._runQueue();
        }
    }

    stop() {
        throw new Error("UNIMPLEMENTED");
    }

    skip() {
        throw new Error("UNIMPLEMENTED");
    }


}

module.exports = ActionQueue
