// Shall display current day of the week with month and month day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var saveBtn = $(".saveBtn");

// function adds color to textarea depending on time of day
function timeBlockColor() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// adds text added to textarea to localstorage
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".description").val();
    localStorage.setItem(time, plan);
});

function usePlanner() {
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        if(currPlan !== null) {
            $(this).siblings(".description").val(currPlan);
        }
    });
}

// Call functions
timeBlockColor();
usePlanner();