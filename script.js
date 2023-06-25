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
  var currentDate = day.js().format("dddd, MMMM DD, YYYY");
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

// To display past, present & future hours & update color codes accordingly
function updateHourlyColors() {
  var currentHour = Day.js().hour();
  $(".description").each(function() {
    var hour = parseInt($(this).attr("id"));

    if (hour < currentHour) {
      $(this).css("background-color", "#d3d3d3");
    } else if (hour === currentHour) {
      $(this).css("background-color", "#ff6961");
    } else {
      $(this).css("background-color", "#77dd77");
    }
  });
}