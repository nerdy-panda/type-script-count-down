class CountDown {
    constructor(nerdDate, until, executeSubscribers = [], doneSubscribers = []) {
        this.nerdDate = nerdDate;
        this.until = until;
        this.executeSubscribers = [];
        this.doneSubscribers = [];
        this.isStop = true;
        this.isDone = false;
        this.countDownHandler = () => {
            if (this.isStop)
                return;
            const now = Date.now();
            const diff = this.nerdDate.diff(now, this.until);
            const isFinish = this.until <= now;
            this.fireExecuteSubscribers(diff);
            if (isFinish) {
                this.isDone = true;
                this.stop();
                this.fireDoneSubscribers(diff);
                return;
            }
            this.dispatch();
        };
        this.executeSubscribers = executeSubscribers;
        this.doneSubscribers = doneSubscribers;
    }
    start() {
        this.startProxy();
    }
    startProxy() {
        if (this.isDone)
            return;
        this.isStop = false;
        this.dispatch();
    }
    dispatch() {
        window.setTimeout(this.countDownHandler, 1);
    }
    fireExecuteSubscribers(diff) {
        for (const subscriber of this.executeSubscribers)
            subscriber.handle(this, diff);
    }
    fireDoneSubscribers(diff) {
        this.doneSubscribers.forEach((subscriber) => subscriber.handle(this, diff));
    }
    stop() {
        this.isStop = true;
    }
}
export default CountDown;
//# sourceMappingURL=CountDown.js.map