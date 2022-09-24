function queuedAction(action, discordMessage, userId, discordClient) {
    return {action, message: discordMessage, userId, client: discordClient};
}

class ActionQueue {
    constructor() {
        this.actions = [];
        this.lastQueuedUserId = null;
        this.running = false;
    }

    async _runQueue() {
        if (this.running)
            return

        this.running = true;

        while (this.actions.length > 0) {
            const {action, message, userId, client} = this.actions.shift();
            if (userId !== this.lastQueuedUserId) {
                this.lastQueuedUserId = userId;
                await action.run(message, client);
            } else {
                console.log(`Ignoring ${message} from ${userId} as it is a command from the same person`)
            }
        }

        this.running = false
    }

    add(action, discordMessage, userId, discordClient) {
        if (action) {

            this.actions.push(queuedAction(action, discordMessage, userId, discordClient));

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
