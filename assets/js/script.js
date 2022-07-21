//variables
let saveBtn = $("saveBtn");
let container = $(".container");
let time9 = $("#9AM");
let time10 = $("#10AM");
let time11 = $("#11AM");
let time12 = $("#12PM");
let time13 = $("#1PM");
let time14 = $("#2PM");
let time15 = $("#3PM");
let time16 = $("#4PM");
let time17 = $("#5PM");

let timeAry = [
  time9,
  time10,
  time11,
  time12,
  time13,
  time14,
  time15,
  time16,
  time17,
];

//time counter
function updateTime() {
  let currentTime = moment();
  $("#currentDay").text(currentTime.format("dddd, MMM Do YYYY, h:mm:ss a"));

  let currentStatus = moment().format("hh");
  for (let index = 0; index < timeAry.length; index++) {
    timeAry[index];
    if (currentStatus > timeAry[i].data("hour")) {
      timeAry[i].addClass("past");
    } else if (currentStatus === timeAry[i].attr("data-hour")) {
      timeAry[i].addClass("present");
    } else {
      timeAry[i].addClass("future");
    }
  }
}

$(function () {
  updateTime();
  setInterval(updateTime, 1000);
});

//changing color for timeblocks (past, present, future)
//save input to local storage
