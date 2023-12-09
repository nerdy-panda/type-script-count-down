import CountDown from "./CountDown";
import TimestampDiffResult from "./TimestampDiffResult";

interface CountDownSubscriber {
    handle(countDown : CountDown , dateDiff : TimestampDiffResult):void;
}
export default CountDownSubscriber;