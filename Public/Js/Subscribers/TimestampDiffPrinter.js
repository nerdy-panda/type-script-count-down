import { default as Base } from "../Services/CountDownExecuteSubscriber.js";
class TimestampDiffPrinter extends Base {
    constructor(result) {
        super();
        this.result = result;
    }
    handle(countDown, dateDiff) {
        const years = this.zeroIfUnderZero(dateDiff.years).toString();
        const months = this.zeroIfUnderZero(dateDiff.months).toString();
        const weeks = this.zeroIfUnderZero(dateDiff.weeks).toString();
        const days = this.zeroIfUnderZero(dateDiff.days).toString();
        const hours = this.zeroIfUnderZero(dateDiff.hours).toString();
        const minutes = this.zeroIfUnderZero(dateDiff.minutes).toString();
        const seconds = this.zeroIfUnderZero(dateDiff.seconds).toString();
        const miliseconds = this.zeroIfUnderZero(dateDiff.milliseconds).toString();
        const result = `${years} Y, ${months} M , ${weeks} W , ${days} D , ${hours} H ,${minutes} M , ${seconds} S , ${miliseconds} MS`;
        this.result.innerHTML = result;
    }
    zeroIfUnderZero(integer) {
        return ((integer < 0) ? 0 : integer);
    }
}
export default TimestampDiffPrinter;
//# sourceMappingURL=TimestampDiffPrinter.js.map