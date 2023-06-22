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