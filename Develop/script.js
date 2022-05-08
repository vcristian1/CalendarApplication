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


$(".saveBtn").on("click", function (event) {
    event.preventDefault()
})








// function runTime() {
//     let currentHour = moment().format('LT');
//     if(currentHour === hoursOfDay[i]) {
//         document.querySelector(".hour").style.color = "blue";
//     }
// }