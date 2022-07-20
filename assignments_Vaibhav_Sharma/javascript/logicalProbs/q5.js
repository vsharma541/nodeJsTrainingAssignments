let year = new Date().getFullYear();
while(!(isLeapYear(year))) {
    year++;
}
const firstLeapYear = year;
console.log(firstLeapYear);
let count = 19;
while(count > 0) {
    year += 4;
    if(isLeapYear(year)) {
        console.log(year);
        count--;
    }
}

function isLeapYear(year) {
    const cond1 = (((year % 4) === 0) && ((year % 100) !== 0));
    const cond2 = (year % 400) === 0;
    return (cond1 || cond2);
}