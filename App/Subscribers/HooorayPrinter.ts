import {default as Contract} from "../Contracts/Subscribers/HooorayPrinter.js";
import CountDownDoneSubscriber from "../Services/CountDownDoneSubscriber.js";
import CountDown from "../Services/CountDown.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult.js";
class HooorayPrinter extends CountDownDoneSubscriber implements Contract{
    constructor(public result : HTMLElement) {
        super();
    }
    override handle(countDown: CountDown, dateDiff: TimestampDiffResult) {
        console.warn(dateDiff);
        const doneMessage :string = "Hooooooooraaaaaaayyyyyyyyy is Doooooneeeeee" ;
        this.result.innerHTML = doneMessage;
        window.console.log(doneMessage);
    }
}
export default HooorayPrinter;