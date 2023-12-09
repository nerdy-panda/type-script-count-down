import CountDownDoneSubscriber from "../Services/CountDownDoneSubscriber.js";
class HooorayPrinter extends CountDownDoneSubscriber {
    constructor(result) {
        super();
        this.result = result;
    }
    handle(countDown, dateDiff) {
        console.warn(dateDiff);
        const doneMessage = "Hooooooooraaaaaaayyyyyyyyy is Doooooneeeeee";
        this.result.innerHTML = doneMessage;
        window.console.log(doneMessage);
    }
}
export default HooorayPrinter;
//# sourceMappingURL=HooorayPrinter.js.map