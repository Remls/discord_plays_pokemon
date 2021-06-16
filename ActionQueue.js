class ActionQueue {
    constructor() {
        this.actions = [];
        this.running = false;
    }

    async _runQueue() {
        if (this.running)
            return

        this.running = true;

        for (let action of this.actions) {
            await action.run();
        }

        this.running = false
    }

    add(action) {
        if (action) {
            this.actions.push(action);

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
