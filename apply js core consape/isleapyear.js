function isLeapYear(year) {
    const remainder=year%4;
    if (remainder===0) {
        // console.log('your year is leap year',year);
        return true;
    }else{
        // console.log('your year is not a leap year',year);
        return false;
    }
}

// isLeapYear(2022);
// isLeapYear(4543);
// isLeapYear(2020);

const ismyyear=isLeapYear(2020);
console.log('this year',ismyyear)