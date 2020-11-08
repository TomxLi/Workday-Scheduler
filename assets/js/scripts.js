$(document).ready(function() {
    // display date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    // Button click listener
    $(".saveBtn").on("click", function() {
        // get nearby values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save values in local storage
        localStorage.setItem(time, text);
    });

    function hourExtractor() {
        // get "number value" from current hours
        var currentTime = moment().hours();
        // compare current hour' with schedule hour, give color to the block accordingly
        $(".time-block").each(function() {
            var scheduleTime = parseInt($(this).attr("id").split("-")[1]);

            if (scheduleTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } 
            else if (scheduleTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    hourExtractor();
  
    // search local storage for saved values and load.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
  