import TimestampDiffResult from "./TimestampDiffResult.js"
interface NerdDate {
    diff(firstTimestamp : number , secondTimestamp :number ):TimestampDiffResult
    humanizeDate(date : Date):string;
    isClearnDiffResult(diffResult : TimestampDiffResult):boolean;
}
export default NerdDate;