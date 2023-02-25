// Function to display the current date and time
function displayCurrentTime() {
   let currentDate = moment().format("dddd, MMMM Do");
   let currentTime = moment().format("HH:mm:ss");
   $("#currentDay").text(currentDate + " " + currentTime);
}
setInterval(displayCurrentTime, 1000);
// Function to create time blocks
// Function to change color based on past present and future
// Function to allow user to enter an event
// Function to save event in local storage on button click
// Function to display saved events from local storage