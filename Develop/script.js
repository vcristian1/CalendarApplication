let saveButton = document.querySelector(".saveBtn");
let textArea = document.querySelectorAll(".time-block");
let currentDay = document.querySelector("#currentDay");
let hour = document.querySelectorAll(".hour")

//function to display the date using moment.js
function displayDate() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

// setInterval is used to repeat the display date function which places the
// time from moment.js into the <p> tag containing the #currentDay ID.
// Without setInterval we would not see the seconds change in real time. 
setInterval(displayDate, 100);


// used moment.js library to set the "real time" current hour to a variable.
let currentHour = moment().hours()
// Jquery each() method used to target each .time-block class in the HTML file
// inside we create a new variable called calendarHour and set it equal to an id in
// the HTML which will return as an integer due to the parseInt used. 
$(".time-block").each(function () {
    let calendarHour = parseInt($(this).attr("id"));
    //conditional statements to correctly style the content inside the .time-block
    //classes. Each conditional will either add or remove either the .present, .future, 
    //or .past class
    if (calendarHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    } else if (calendarHour > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    } else {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        //if the calendarHour is anything else other than
        // being equal to the currentHour or greater than
        // the currentHour set the value to disabled cannot use.
        $(this).prop("disabled", true);
    }
});

// on click of saveButton, 
$(".saveBtn").click(function () {
    //selectedHour is equal to the ID within each time-block class,
    //the right side translates to target the id's within the .time-block
    //class which is a sibling to the current element targeted saveButton .saveBtn
    let selectedHour = $(this).siblings(".time-block").attr("id");
    //content is equal to the value of the textarea element targeted by the
    // time-block class, which is a sibling of the current element targetted 
    //in the DOM which is the saveButton .saveBtn  
    let content = $(this).siblings(".time-block").val();
    // saves both variables together in local storage
    localStorage.setItem(selectedHour, content);
})

//Because hours in moment.js are in 24 hour time, each text area needed an id starting
//from 9 to 17 which is 5pm in standard time. 

//targets localStorage stored data from each id "#" and places it back in the .time-block with the matching id 
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
