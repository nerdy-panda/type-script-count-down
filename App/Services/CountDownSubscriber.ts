import {default as Contract } from "../Contracts/Services/CountDownSubscriber.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult";
import CountDown from "../Contracts/Services/CountDown.js";
abstract class CountDownSubscriber implements Contract {
    abstract handle(countDown: CountDown, dateDiff: TimestampDiffResult):void;
}
export default CountDownSubscriber;