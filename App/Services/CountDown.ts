import { default as Contract } from "../Contracts/Services/CountDown.js";
import CountDownExecuteSubscriber from "../Contracts/Services/CountDownExecuteSubscriber.js";
import NerdDate from "../Contracts/Services/NerdDate.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult.js";
import CountDownDoneSubscriber from "../Contracts/Services/CountDownDoneSubscriber";

class CountDown implements Contract {
    executeSubscribers: CountDownExecuteSubscriber[] = [];
    doneSubscribers : CountDownDoneSubscriber[] = [] ;
    protected isStop = true ;
    protected isDone = false ;
    constructor(
        protected nerdDate : NerdDate , public until : number ,
        executeSubscribers: CountDownExecuteSubscriber[] = [] ,
        doneSubscribers : CountDownDoneSubscriber[] = []
    ){
        this.executeSubscribers = executeSubscribers ;
        this.doneSubscribers = doneSubscribers ;
    }
    start():void {
        this.startProxy();
    }
    protected startProxy():void {
        if(this.isDone)
            return ;
        this.isStop = false; 
        this.dispatch();
    }
    protected dispatch():void {
        window.setTimeout(this.countDownHandler,1);
    }
    protected countDownHandler = ():void => {
        if(this.isStop)
            return;

        const now = Date.now();
        const diff : TimestampDiffResult = this.nerdDate.diff(now,this.until);
        const isFinish : boolean = this.until <= now ;
        
        this.fireExecuteSubscribers(diff);
        
        if (isFinish){
            this.isDone = true; 
            this.stop();
            this.fireDoneSubscribers(diff);
            return;
        }
        this.dispatch();
    }
    protected fireExecuteSubscribers(diff : TimestampDiffResult):void {
        for (const subscriber of this.executeSubscribers)
            subscriber.handle(this,diff);
    }
    protected fireDoneSubscribers(diff : TimestampDiffResult){
        this.doneSubscribers.forEach( (subscriber : CountDownDoneSubscriber ):void => subscriber.handle(this,diff) );
    }
    stop(): void {
        this.isStop = true ;
    }
}

export default CountDown;