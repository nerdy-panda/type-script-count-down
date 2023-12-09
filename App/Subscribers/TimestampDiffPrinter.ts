import {default as Base} from "../Services/CountDownExecuteSubscriber.js";
import {default as Contract } from "../Contracts/Subscribers/TimestampDiffPrinter.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult.js";
import NerdDate from "../Contracts/Services/NerdDate.js";
import CountDown from "../Contracts/Services/CountDown";

class TimestampDiffPrinter extends Base implements Contract {
    constructor(public result : HTMLElement , ){
        super();
    }

    override handle(countDown : CountDown, dateDiff: TimestampDiffResult): void {
        const years : string  = this.zeroIfUnderZero(dateDiff.years).toString();
        const months : string = this.zeroIfUnderZero(dateDiff.months).toString();
        const weeks : string = this.zeroIfUnderZero(dateDiff.weeks).toString();
        const days : string = this.zeroIfUnderZero(dateDiff.days).toString();
        const hours : string = this.zeroIfUnderZero(dateDiff.hours).toString();
        const minutes : string = this.zeroIfUnderZero(dateDiff.minutes).toString();
        const seconds : string = this.zeroIfUnderZero(dateDiff.seconds).toString();
        const miliseconds : string = this.zeroIfUnderZero(dateDiff.milliseconds).toString();

        const result = `${years} Y, ${months} M , ${weeks} W , ${days} D , ${hours} H ,${minutes} M , ${seconds} S , ${miliseconds} MS`;

        this.result.innerHTML = result;
    }
    protected zeroIfUnderZero(integer : number):number {
        return ((integer<0)? 0 : integer) ;
    }
}

export default TimestampDiffPrinter;