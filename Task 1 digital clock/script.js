//digital clock script
// This script updates the clock every second

function updateClock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
    setTimeout(updateClock, 1000); // Update every second
}
updateClock();