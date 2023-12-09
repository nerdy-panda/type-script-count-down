import { default as Contract } from "../Contracts/Services/CountDownDoneSubscriber.js";
import { default as Base } from "./CountDownSubscriber.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult";
import CountDown from "../Contracts/Services/CountDown.js";
abstract class CountDownDoneSubscriber extends Base implements Contract {
    abstract override handle(countDown: CountDown, dateDiff: TimestampDiffResult) :void ;
}
export default CountDownDoneSubscriber;