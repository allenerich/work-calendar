//ON Ready
$(document).ready(function () {


    //save button functionality
    $(".saveBtn").on("click", function () {
        //get nearby values

        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save to localStorage
        localStorage.setItem(value, time);
    })
    //hour updater


    function hourUpdater() {
        var currentHour =  moment().hours();



        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            // console.log(blockHour);
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");

            }
            else //else adds to future class
            {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        });
    }
    //calling hourUpdater
    hourUpdater();

    var interval = setInterval(hourUpdater, 1500);
    //loading local Storage saved repeat this line change hours using military clock
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15.description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17.description").val(localStorage.getItem("hour-17"));
    

    //displaying current day on the page
    $("currentDay").text(moment().format("dddd, MMMM, Do"));


});