import { default as Contract } from "../Contracts/Services/CountDownExecuteSubscriber.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult.js";
import CountDown from "../Contracts/Services/CountDown.js";
import {default as Base } from "./CountDownSubscriber.js";

abstract class CountDownExecuteSubscriber extends Base implements Contract{
    abstract override handle(countDown: CountDown, dateDiff: TimestampDiffResult):void;
}

export default CountDownExecuteSubscriber;