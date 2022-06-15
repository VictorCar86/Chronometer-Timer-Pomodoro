// Chronometer constans
const chronoHoursDigits = document.getElementById("chrono_hours_id");
const chronoMinutesDigits = document.getElementById("chrono_minutes_id");
const chronoSecondsDigits = document.getElementById("chrono_seconds_id");
const chronoMilisecondsDigits = document.getElementById("chrono_miliseconds_id");
// Timer constants
const timerHoursDigits = document.getElementById("hours_id");
const timerMinutesDigits = document.getElementById("minutes_id");
const timerSecondsDigits = document.getElementById("seconds_id");
const timerMilisecondsDigits = document.getElementById("miliseconds_id");

let intervalFunction;
let currentButton = false;
let hoursCount = 3;
let minutesCount = 0;
let secondsCount = 3;
let milisecondsCount = 60;

// Chronometer
function startChronometer(){
    if (!currentButton){
        currentButton = true
        intervalFunction = setInterval(()=>{
            milisecondsCount++
            addZeros(chronoMilisecondsDigits, milisecondsCount)
            if (milisecondsCount == 99){
                secondsCount++
                addZeros(chronoSecondsDigits, secondsCount)
                milisecondsCount = 0
            }
            if (secondsCount == 59 && milisecondsCount == 98){
                minutesCount++
                addZeros(chronoMinutesDigits, minutesCount)
                milisecondsCount = 0
                chronoSecondsDigits.innerText = "0" + 0
                secondsCount = 0
            }
            if (minutesCount == 59 && secondsCount == 59 && milisecondsCount == 97){
                hoursCount++
                addZeros(chronoHoursDigits, hoursCount)
                milisecondsCount = 0
                chronoMinutesDigits.innerText = "0" + 0
                minutesCount = 0
                chronoSecondsDigits.innerText = "0" + 0
                secondsCount = 0
            }
        }, 10)
    }
}

function stopCounting(){
    currentButton = false
    clearInterval(intervalFunction)
}

function resetChronometer(){
    stopChronometer()
    hoursCount = 0;
    minutesCount = 0;
    secondsCount = 0;
    milisecondsCount = 0;
    chronoHoursDigits.innerText = "00"
    chronoMinutesDigits.innerText = "00"
    chronoSecondsDigits.innerText = "00"
    chronoMilisecondsDigits.innerText = "00"
}

function addZeros(textToChange, counter){
    if (counter < 10){
        textToChange.innerText = "0" + counter
    } else {
        textToChange.innerText = counter
    }
}

// Timer
function startTimer(){
    if (!currentButton){
        currentButton = true
        intervalFunction = setInterval(()=>{
            milisecondsCount--
            console.log(milisecondsCount)
            addZeros(timerMilisecondsDigits, milisecondsCount)
            if (milisecondsCount == 0){
                secondsCount--
                addZeros(timerSecondsDigits, secondsCount)
                milisecondsCount = 99
            }
            if (secondsCount == 0 && milisecondsCount == 1){
                minutesCount--
                addZeros(timerMinutesDigits, minutesCount)
                milisecondsCount = 99
                timerSecondsDigits.innerText = 59
                secondsCount = 59
            }
            if (minutesCount == 0 && secondsCount == 0 && milisecondsCount == 2){
                hoursCount--
                addZeros(timerHoursDigits, hoursCount)
                milisecondsCount = 99
                timerMinutesDigits.innerText = 59
                minutesCount = 59
                timerSecondsDigits.innerText = 59
                secondsCount = 59
            }
        }, 10)
    }
}

function resetTimer(){
    stopCounting()
    hoursCount = 0;
    minutesCount = 0;
    secondsCount = 0;
    milisecondsCount = 0;
    timerHoursDigits.innerText = "00"
    timerMinutesDigits.innerText = "00"
    timerSecondsDigits.innerText = "00"
    timerMilisecondsDigits.innerText = "00"
}