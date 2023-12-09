import { default as Contract } from "../Contracts/Services/NerdDate.js";
import TimeUnitMilliseconds from "../Enum/TimeUnitMilliseconds.js";
import { KeysReverse } from "../Types/Enum/TimeUnitMilliseconds.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult.js";
import { Keys } from "../Types/TimestampDiffResult.js";
class NerdDate implements Contract {
    diff(firstTimestamp: number, secondTimestamp: number): TimestampDiffResult {
        let diffMiliseconds = secondTimestamp - firstTimestamp ;

        let keys : string[] = Object.keys(TimeUnitMilliseconds) ;
        keys = keys.filter( (key : string ) :boolean => Number.isNaN(Number.parseInt(key)) ) ;
        const enumKeys: KeysReverse = keys.reverse() as KeysReverse;

        const result : number[] = [] ;

        for (const enumKey of enumKeys) {
            const enumValue :number = TimeUnitMilliseconds[enumKey];
            result.push(Math.trunc(diffMiliseconds / enumValue ));        
            diffMiliseconds %= enumValue ;
        }
        return {
            years : result[0] , months : result[1] , weeks : result[2] , 
            days : result[3], hours : result[4] , minutes : result[5] ,
            seconds : result[6] , milliseconds  : diffMiliseconds 
        }
    }
    humanizeDate(date: Date): string {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        //return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
    }
    isClearnDiffResult(diffResult : TimestampDiffResult):boolean {
        const diffKeys : Keys = <Keys> Object.keys(diffResult);
        let diffKey : keyof TimestampDiffResult;
        for (diffKey of diffKeys) {
            const diffItem = diffResult[diffKey];
            if(diffItem>0)
                return false;
        }
        return true;
    }
}

export default NerdDate;