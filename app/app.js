// Define an array of objects to represent each hour of the work day, with properties for the hour, a display time, and an event description
let workDay = [
    { hour: 9, display: "9AM", event: "", },
    { hour: 10, display: "10AM", event: "", },
    { hour: 11, display: "11AM", event: "", },
    { hour: 12, display: "12PM", event: "", },
    { hour: 13, display: "1PM", event: "", },
    { hour: 14, display: "2PM", event: "", },
    { hour: 15, display: "3PM", event: "", },
    { hour: 16, display: "4PM", event: "", },
    { hour: 17, display: "5PM", event: "", }
];
// Function to display the current date and time
function displayCurrentTime() {
   let currentDate = moment().format("dddd, MMMM Do");
   let currentTime = moment().format("HH:mm:ss");
   $("#currentDay").text(currentDate + " " + currentTime);
}
setInterval(displayCurrentTime, 1000);
// Function to create time blocks
function createTimeBlocks() {
    let currentHour = moment().hour();
    // for loop to create a row for each hour of the work day
    for (let i = 0; i < workDay.length; i++) {
        let timeBlock = $("<div>").addClass("row time-block");
        let hourEl = $("<div>").addClass("col-md-1 hour").text(workDay[i].display);
        let eventEl = $("<textarea>").addClass("col-md-10 description").val(workDay[i].event);
        let saveBtn = $("<button>").addClass("col-md-1 saveBtn").html("<i class='fas fa-save'></i>");
        // Adds classes to the event column based on whether the hour is in the past, present, or future
        if(workDay[i].hour < currentHour) {
            eventEl.addClass("past");
        }else if(workDay[i].hour === currentHour) {
            eventEl.addClass("present");
        }else{
            eventEl.addClass("future");
        }
        // Appends each time block to the container element
        timeBlock.append(hourEl, eventEl, saveBtn);
        $(".container").append(timeBlock);
    }
}
createTimeBlocks();
// Function to change color based on past present and future
function changeColor() {
    let currentHour = moment().hour();
    $(".description").each(function() {
        let blockHour = parseInt($(this).parent().find(".hour").text());
        if(blockHour < currentHour) {
            $(this).addClass("past");
        }else if(blockHour === currentHour) {
            $(this).addClass("present");
        }else{
            $(this).addClass("future");
        }
    });
}
changeColor();
// Function to allow user to enter an event
// Function to save event in local storage on button click
function saveEvent() {
    $(".saveBtn").on("click", function() {
        let hour = $(this).parent().find(".hour").text();
        let event = $(this).parent().find(".description").val();
        localStorage.setItem(hour, event);
    });
}
// Function to display saved events from local storage
// Call the functions
saveEvent();