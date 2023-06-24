// Using jQuery to execute functions after DOM is loaded
$(document).ready(function() {
  displayCurrentDay();
  loadEventsFromLocalStorage();
  updateHourlyColours();

// Click event listener using JQuery to save hour and description in local storage, and display notification
$(".saveBtn").click(function() {
  var hour = $(this).data("hour");
  var description = $("#" + hour).val();
  localStorage.setItem(hour,description);
  showNotification("New appointment added to <span class='maroon-text'>local storage</span>");
  });
});

// Display current day at the top of the schedule
function displayCurrentDay() {
  var currentDayElement = $("#currentDay");
  var currentDate = new Date().toLocaleString("en-AUS", {
    weekday: "Long",
    month: "Long",
    day: "numeric",
    year: "numeric"
  });
  currentDayElement.text(currentDate);
}

// Saving events in local storage
function loadEventsFromLocalStorage() {
  for (var i = 9; i <= 17; i++) {
    var eventText = localStorage.getItem(i);
    if (eventText) {
      $("#", + i).val(eventText);
    }
  }
}
