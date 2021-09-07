function isLeapYear(year) {
    if ((year % 4 == 0) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYearLeapYear);

const yourYear = 2100;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('your year is leap year', isYourYearLeapYear);

// check javascript leap year