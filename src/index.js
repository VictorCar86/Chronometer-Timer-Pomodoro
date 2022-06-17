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
const timerInputHours = document.getElementById("inputHours");
const timerInputMinutes = document.getElementById("inputMinutes");
const timerInputSeconds = document.getElementById("inputSeconds");

// Main variables
let intervalFunction;
let currentButton = false;
let timerNumbersStarted = false;
let hoursCount = 0;
let minutesCount = 0;
let secondsCount = 0;
let milisecondsCount = 0;

// Utils
function addZeros(textToChange, counter){
    if (counter < 10){
        if (counter == -1){
            textToChange.innerText = "00"
        } else {
            textToChange.innerText = "0" + counter
        }
    } else {
        textToChange.innerText = counter
    }
}

function checkCorrectNumbers(input){
    input.onkeydown = (num) => {
        if(!((num.keyCode > 95 && num.keyCode < 106)
          || (num.keyCode > 47 && num.keyCode < 58)
          || num.keyCode == 8)) {
            return false;
        }
    }
}
checkCorrectNumbers(timerInputHours)
checkCorrectNumbers(timerInputMinutes)
checkCorrectNumbers(timerInputSeconds)

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
    stopCounting()
    hoursCount = 0;
    minutesCount = 0;
    secondsCount = 0;
    milisecondsCount = 0;
    chronoHoursDigits.innerText = "00"
    chronoMinutesDigits.innerText = "00"
    chronoSecondsDigits.innerText = "00"
    chronoMilisecondsDigits.innerText = "00"
}

// Timer
function startTimer(){
    if (!timerNumbersStarted){
        hoursCount = Number(timerInputHours.value)
        timerHoursDigits.innerHTML = "0" + hoursCount
        minutesCount = Number(timerInputMinutes.value)
        timerMinutesDigits.innerHTML = "0" + minutesCount
        secondsCount = Number(timerInputSeconds.value)
        timerSecondsDigits.innerHTML = "0" + secondsCount
    }
    if (!hoursCount <= 0 || !minutesCount <= 0 || !secondsCount <= 0){
        if (!currentButton){
            currentButton = true
            timerNumbersStarted = true

            intervalFunction = setInterval(()=>{
                milisecondsCount--
                addZeros(timerMilisecondsDigits, milisecondsCount)
                addZeros(timerSecondsDigits, secondsCount)
                addZeros(timerMinutesDigits, minutesCount)
                addZeros(timerHoursDigits, hoursCount)
                if (milisecondsCount < 0){
                    secondsCount--
                    addZeros(timerSecondsDigits, secondsCount)
                    milisecondsCount = 99
                }
                if (secondsCount == -1){
                    minutesCount--
                    addZeros(timerMinutesDigits, minutesCount)
                    milisecondsCount = 99
                    timerSecondsDigits.innerText = 59
                    secondsCount = 59
                }
                if (minutesCount == -1){
                    hoursCount--
                    addZeros(timerHoursDigits, hoursCount)
                    milisecondsCount = 99
                    timerMinutesDigits.innerText = 59
                    minutesCount = 59
                    timerSecondsDigits.innerText = 59
                    secondsCount = 59
                }
                if (hoursCount == 0 && minutesCount == 0 && secondsCount == 0 && milisecondsCount == 0){
                    resetTimer()
                    alert("Timer finished")
                }
            }, 10)
        }
    } else {
        alert("Insert a number to continue")
        timerHoursDigits.innerText = "00"
        timerMinutesDigits.innerText = "00"
        timerSecondsDigits.innerText = "00"
        timerMilisecondsDigits.innerText = "00"
    }
}

function resetTimer(){
    stopCounting()
    timerNumbersStarted = false
    hoursCount = 0
    minutesCount = 0
    secondsCount = 0
    milisecondsCount = 0
    timerHoursDigits.innerText = "00"
    timerMinutesDigits.innerText = "00"
    timerSecondsDigits.innerText = "00"
    timerMilisecondsDigits.innerText = "00"
}

// Pomodoro
