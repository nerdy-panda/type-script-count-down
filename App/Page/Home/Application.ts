import { default as NerdDateContract } from "../../Contracts/Services/NerdDate.js";
import TimeUnitMilliseconds from "../../Enum/TimeUnitMilliseconds.js";
import { default as CountDownContract } from "../../Contracts/Services/CountDown.js";
import CountDown from "../../Services/CountDown.js";
import {default as PrinterContract } from "../../Contracts/Subscribers/TimestampDiffPrinter.js";
import {default as Printer} from "../../Subscribers/TimestampDiffPrinter.js";
import { default as CountDownDoneSubscriberContract } from "../../Contracts/Services/CountDownDoneSubscriber.js";
import CountDownDoneSubscriber from "../../Services/CountDownDoneSubscriber.js";
import TimestampDiffResult from "../../Contracts/Services/TimestampDiffResult.js";
import {default as HooorayPrinterContract } from "../../Contracts/Subscribers/HooorayPrinter.js";
import HooorayPrinter from "../../Subscribers/HooorayPrinter.js";
class Application {
    constructor(public nerdDate : NerdDateContract){}
    main(){


        const result : HTMLElement = <HTMLElement> window.document.body.querySelector("#countDown");
        const printer : PrinterContract = new Printer(result);
        const donePrint :HooorayPrinterContract = new HooorayPrinter(result);
        const countDown : CountDownContract = new CountDown(
            this.nerdDate,Date.now() + 1200 , [printer] , [donePrint]
        );

        countDown.start();


    }
}

export default Application;