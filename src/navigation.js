window.addEventListener("DOMContentLoaded", navigation, false);
window.addEventListener("hashchange", navigation, false);
chronoIcon.addEventListener("click", ()=> location.hash = "#chronometer");
timerIcon.addEventListener("click", ()=> location.hash = "#timer");
pomodoroIcon.addEventListener("click", ()=> location.hash = "#pomodoro");


function navigation(){
    if (location.hash.startsWith("#pomodoro")){
        pomodoroPage()
    }
    if (location.hash.startsWith("#timer")){
        timerPage()
    }
    if (location.hash.startsWith("#chronometer")){
        chronometerPage()
    }
}

function chronometerPage(){
    reset()
    mainTitle.innerText = "Chronometer"
    chronometerInputs.classList.remove("inactive")
    timerInputs.classList.add("inactive")
    pomodoroInputs.classList.add("inactive")
}
function timerPage(){
    reset()
    mainTitle.innerText = "Timer"
    chronometerInputs.classList.add("inactive")
    timerInputs.classList.remove("inactive")
    pomodoroInputs.classList.add("inactive")
}
function pomodoroPage(){
    reset()
    mainTitle.innerText = "Pomodoro"
    chronometerInputs.classList.add("inactive")
    timerInputs.classList.add("inactive")
    pomodoroInputs.classList.remove("inactive")
}