import CountDownExecuteSubscriber from "../Services/CountDownExecuteSubscriber.js";

interface TimestampDiffPrinter extends CountDownExecuteSubscriber {
    result : HTMLElement;
}

export default TimestampDiffPrinter;