import TimeUnitMilliseconds from "../Enum/TimeUnitMilliseconds.js";
class NerdDate {
    diff(firstTimestamp, secondTimestamp) {
        let diffMiliseconds = secondTimestamp - firstTimestamp;
        let keys = Object.keys(TimeUnitMilliseconds);
        keys = keys.filter((key) => Number.isNaN(Number.parseInt(key)));
        const enumKeys = keys.reverse();
        const result = [];
        for (const enumKey of enumKeys) {
            const enumValue = TimeUnitMilliseconds[enumKey];
            result.push(Math.trunc(diffMiliseconds / enumValue));
            diffMiliseconds %= enumValue;
        }
        return {
            years: result[0], months: result[1], weeks: result[2],
            days: result[3], hours: result[4], minutes: result[5],
            seconds: result[6], milliseconds: diffMiliseconds
        };
    }
    humanizeDate(date) {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
    isClearnDiffResult(diffResult) {
        const diffKeys = Object.keys(diffResult);
        let diffKey;
        for (diffKey of diffKeys) {
            const diffItem = diffResult[diffKey];
            if (diffItem > 0)
                return false;
        }
        return true;
    }
}
export default NerdDate;
//# sourceMappingURL=NerdDate.js.map