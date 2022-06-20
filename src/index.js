// Digits constants
const hoursDigits = document.getElementById("hours_id");
const minutesDigits = document.getElementById("minutes_id");
const secondsDigits = document.getElementById("seconds_id");
const milisecondsDigits = document.getElementById("miliseconds_id");
// Timer constants
const timerInputHours = document.getElementById("inputHours");
const timerInputMinutes = document.getElementById("inputMinutes");
const timerInputSeconds = document.getElementById("inputSeconds");
// Pomodoro constants
const pomodoro25minsRadio = document.getElementById("25mins_radio")
const pomodoro50minsRadio = document.getElementById("50mins_radio")

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

function stopCounting(){
    currentButton = false
    clearInterval(intervalFunction)
}

function reset(){
    stopCounting()
    timerNumbersStarted = false
    hoursCount = 0
    minutesCount = 0
    secondsCount = 0
    milisecondsCount = 0
    hoursDigits.innerText = "00"
    minutesDigits.innerText = "00"
    secondsDigits.innerText = "00"
    milisecondsDigits.innerText = "00"
}

// Chronometer
function startChronometer(pomodoroMode = false){
    if (!currentButton){
        currentButton = true
        intervalFunction = setInterval(()=>{
            milisecondsCount++
            addZeros(milisecondsDigits, milisecondsCount)
            if (milisecondsCount == 99){
                secondsCount++
                addZeros(secondsDigits, secondsCount)
                milisecondsCount = 0
            }
            if (secondsCount == 59 && milisecondsCount == 98){
                minutesCount++
                addZeros(minutesDigits, minutesCount)
                milisecondsCount = 0
                secondsDigits.innerText = "0" + 0
                secondsCount = 0
            }
            if (minutesCount == 59 && secondsCount == 59 && milisecondsCount == 97){
                hoursCount++
                addZeros(hoursDigits, hoursCount)
                milisecondsCount = 0
                minutesDigits.innerText = "0" + 0
                minutesCount = 0
                secondsDigits.innerText = "0" + 0
                secondsCount = 0
            }
            if (pomodoroMode){
                if (pomodoro25minsRadio.checked && minutesCount == 25){
                    alert("Time out, please rest 5 minutes")
                    reset()
                }
                if (pomodoro50minsRadio.checked && minutesCount == 50){
                    alert("Time out, please rest 10 minutes")
                    reset()
                }
            }
        }, 10)
    }
}

// Timer
function startTimer(){
    if (!timerNumbersStarted){
        hoursCount = Number(timerInputHours.value)
        hoursDigits.innerHTML = "0" + hoursCount
        minutesCount = Number(timerInputMinutes.value)
        minutesDigits.innerHTML = "0" + minutesCount
        secondsCount = Number(timerInputSeconds.value)
        secondsDigits.innerHTML = "0" + secondsCount
    }
    if (!hoursCount <= 0 || !minutesCount <= 0 || !secondsCount <= 0){
        if (!currentButton){
            currentButton = true
            timerNumbersStarted = true

            intervalFunction = setInterval(()=>{
                milisecondsCount--
                console.log(secondsCount)
                addZeros(milisecondsDigits, milisecondsCount)
                addZeros(secondsDigits, secondsCount)
                addZeros(minutesDigits, minutesCount)
                addZeros(hoursDigits, hoursCount)
                if (milisecondsCount < 0){
                    secondsCount--
                    addZeros(secondsDigits, secondsCount)
                    milisecondsCount = 99
                }
                if (secondsCount == -1){
                    minutesCount--
                    addZeros(minutesDigits, minutesCount)
                    milisecondsCount = 99
                    secondsDigits.innerText = 59
                    secondsCount = 59
                }
                if (minutesCount == -1){
                    hoursCount--
                    addZeros(hoursDigits, hoursCount)
                    milisecondsCount = 99
                    minutesDigits.innerText = 59
                    minutesCount = 59
                    secondsDigits.innerText = 59
                    secondsCount = 59
                }
                if (hoursCount == 0 && minutesCount == 0 && secondsCount == 0 && milisecondsCount == 0){
                    reset()
                    alert("Timer finished")
                }
            }, 10)
        }
    } else {
        alert("Insert a number to continue")
        hoursDigits.innerText = "00"
        minutesDigits.innerText = "00"
        secondsDigits.innerText = "00"
        milisecondsDigits.innerText = "00"
    }
}

// Pomodoro
function startPomodoro(){
    if (pomodoro25minsRadio.checked || pomodoro50minsRadio.checked){
        startChronometer(true)
    } else {
        alert("Please, select one option to start")
    }
}