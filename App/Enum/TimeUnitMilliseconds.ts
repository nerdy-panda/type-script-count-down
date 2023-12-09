enum TimeUnitMilliseconds {
    SECOND = 1000 ,
    MINUTE = 60 * TimeUnitMilliseconds.SECOND ,
    HOUR = 60 * TimeUnitMilliseconds.MINUTE ,
    DAY = 24 * TimeUnitMilliseconds.HOUR ,
    WEEK = 7 * TimeUnitMilliseconds.DAY ,
    MONTH = 4 * TimeUnitMilliseconds.WEEK ,
    YEAR = 12 * TimeUnitMilliseconds.MONTH ,    
}
export default TimeUnitMilliseconds;
