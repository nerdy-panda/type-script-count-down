import CountDownDoneSubscriber from "../Services/CountDownDoneSubscriber.js";

interface HooorayPrinter extends CountDownDoneSubscriber {
    result : HTMLElement ;
}
export default HooorayPrinter;