const Current_Day_Element = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const CurrentDate = new Date();
const Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const CurrentDayIndex = CurrentDate.getDay();
const CurrentdayName = Weekdays[CurrentDayIndex];
Current_Day_Element.textContent = `${CurrentdayName}`;
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
const updateTime = () => {
    currentTimeMs = new Date().getTime();
    currentTime.textContent = `${currentTimeMs}`;
}
setInterval(updateTime,1);