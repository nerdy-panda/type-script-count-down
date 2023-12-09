import CountDown from "../../Services/CountDown.js";
import { default as Printer } from "../../Subscribers/TimestampDiffPrinter.js";
import HooorayPrinter from "../../Subscribers/HooorayPrinter.js";
class Application {
    constructor(nerdDate) {
        this.nerdDate = nerdDate;
    }
    main() {
        const result = window.document.body.querySelector("#countDown");
        const printer = new Printer(result);
        const donePrint = new HooorayPrinter(result);
        const countDown = new CountDown(this.nerdDate, Date.now() + 1200, [printer], [donePrint]);
        countDown.start();
    }
}
export default Application;
//# sourceMappingURL=Application.js.map