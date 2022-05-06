let saveButton = document.querySelector(".saveBtn");
let currentDay = document.querySelector("#currentDay");
let hoursOfDay = ["9:00 AM", "10:00 AM", ];
let textArea = document.querySelectorAll("#txt");
let currentHour = document.querySelectorAll("#currentHour")

$("#currentDay").html(moment().format("MMM Do YYYY")); 
$("#currentHour").html(moment().format('LT'));











// function runTime() {
//     let currentHour = moment().format('LT');
//     if(currentHour === hoursOfDay[i]) {
//         document.querySelector(".hour").style.color = "blue";
//     } 
// }