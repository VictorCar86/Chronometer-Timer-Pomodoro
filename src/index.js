// Timer
const hoursDigits = document.getElementById("hours_id");
const minutesDigits = document.getElementById("minutes_id");
const secondsDigits = document.getElementById("seconds_id");
const milisecondsDigits = document.getElementById("miliseconds_id");

let intervalFunction;
let currentButton;
let hoursCount = 0;
let minutesCount = 0;
let secondsCount = 0;
let milisecondsCount = 0;

function startTimer(){
    currentButton = event.target
    currentButton.disable = true
    console.log(currentButton)
    intervalFunction = setInterval(()=>{
        milisecondsCount++
        if (milisecondsCount < 10){
            milisecondsDigits.innerText = "0" + milisecondsCount
        } else {
            milisecondsDigits.innerText = milisecondsCount
        }
        if (milisecondsCount == 99){
            secondsCount++
            if (secondsCount < 10){
                secondsDigits.innerText = "0" + secondsCount
            } else {
                secondsDigits.innerText = secondsCount
            }
            milisecondsCount = 0
        }
        if (secondsCount == 59 && milisecondsCount == 98){
            minutesCount++
            if (minutesCount < 10){
                minutesDigits.innerText = "0" + minutesCount
            } else {
                minutesDigits.innerText = minutesCount
            }
            milisecondsCount = 0
            secondsDigits.innerText = "0" + 0
            secondsCount = 0
        }
        if (minutesCount == 59 && secondsCount == 59 && milisecondsCount == 97){
            hoursCount++
            if (hoursCount < 10){
                hoursDigits.innerText = "0" + hoursCount
            } else {
                hoursDigits.innerText = hoursCount
            }
            milisecondsCount = 0
            minutesDigits.innerText = "0" + 0
            minutesCount = 0
            secondsDigits.innerText = "0" + 0
            secondsCount = 0
        }
    }, 10)
}

function stopTimer(){
    currentButton.disable = false
    clearInterval(intervalFunction)
}