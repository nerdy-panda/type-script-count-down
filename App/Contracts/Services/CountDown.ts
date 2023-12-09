import CountDownExecuteSubscriber from "./CountDownExecuteSubscriber.js";
import CountDownDoneSubscriber from "./CountDownDoneSubscriber.js";

interface CountDown {
    executeSubscribers : CountDownExecuteSubscriber[];
    doneSubscribers : CountDownDoneSubscriber[];
    until : number ;
    start():void;
    stop():void;
}

export default CountDown;