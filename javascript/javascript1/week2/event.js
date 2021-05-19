function getEventWeekday(daysFromNow) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const date = (today.getDay() + daysFromNow) % 7
    return weekdays[date];
}

console.log(getEventWeekday(9));