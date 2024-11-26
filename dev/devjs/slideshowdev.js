// Slideshow Script
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow-container img");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === slideIndex) {
            slide.classList.add("active");
        }
    });
    slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 60000); // Change slide every 60 seconds

// Stop Watch Script

var startTime;
var stopwatchInterval;
function startStopwatch() { // for use after the timer hits 0
    stopTimer(); // Stop the timer when it reaches zero
    if (!stopwatchInterval) {
        startTime = new Date().getTime();
        stopwatchInterval = setInterval(updateStopwatch, 1000)
    }
}

function updateStopwatch() {
        var currentTime = new Date().getTime(); // get current time in milliseconds
        var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
        var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
        var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
        var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
        var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
        document.getElementById("timer-display").innerHTML = displayTime; // update the display
}

// Countdown Timer Script
let timer;
let totalSeconds = 1800; // Default timer
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const displaySeconds = totalSeconds % 60;
    document.getElementById("timer-display").textContent =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (displaySeconds < 10 ? "0" : "") + displaySeconds;
}

function startTimer() {
    if (!isRunning && totalSeconds > 0) { // Start only if timer is set and not running
        isRunning = true;
        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                //stopTimer(); // Stop the timer when it reaches zero
                //alert("Time's up!");
                startStopwatch();
            }
        }, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    updateDisplay();
}

function adjustTimer() {
    const newTime = prompt("Enter countdown time in minutes:", totalSeconds / 60);
    if (newTime !== null && !isNaN(newTime) && newTime >= 0) {
        totalSeconds = parseInt(newTime) * 60; // Convert minutes to seconds
        updateDisplay();
        //startTimer();
    }
}

function Timeroptions() {
    const newTime = prompt("Select time option:", totalSeconds / 60);
}

// Timer Visibility Toggle
function toggleTimerVisibility() {
    const timerContainer = document.getElementById("timer-container");
    if (timerContainer.style.display === "none") {
        timerContainer.style.display = "flex"; // Show timer
    } else {
        timerContainer.style.display = "none"; // Hide timer
    }
}
