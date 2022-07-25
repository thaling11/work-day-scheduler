//variables
let time9 = $("#09");
let time10 = $("#10");
let time11 = $("#11");
let time12 = $("#12");
let time13 = $("#13");
let time14 = $("#14");
let time15 = $("#15");
let time16 = $("#16");
let time17 = $("#17");
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
var eventInput = [];
var timeBlocks = document.querySelector(".time-block");
var saveBtn = document.querySelector(".saveBtn");
var container = document.querySelector(".container");


//header time counter
function updateTime() {
  let currentTime = moment();
  $("#currentDay").text(currentTime.format("dddd, MMM Do YYYY, h:mm:ss a"));
}
$(function () {
  updateTime();
  setInterval(updateTime, 1000);
});

//changing color for timeblocks (past, present, future)
function checkTime() {
  //get current time
  let currentStatus = moment().format("kk");
  //loop through each hour
  for (let index = 0; index < timeAry.length; index++) {
    timeAry[index].removeClass("future past present");
    if (currentStatus > timeAry[index].attr("data-hour")) {
      timeAry[index].addClass("past");
    } else if (currentStatus === timeAry[index].attr("data-hour")) {
      timeAry[index].addClass("present");
    } else {
      timeAry[index].addClass("future");
    }
  }
}
checkTime();

//check every minute
setInterval(checkTime(), 1000 * 60 * 1);

container.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.nodeName === "BUTTON") {
    saveInput(
      event.target.previousElementSibling.value,
      event.path[1].children[0].innerText
    );
    renderInput();
  }
});

// Save input to local storage
function saveInput(x, y) {
  var time = y;
  var text = x;
  localStorage.setItem(time, text);
}

// Save text content when refresh page
function renderInput() {
  var of9 = document.getElementById("09") 
  of9.textContent = localStorage.getItem("9:00 AM");

  var of10 = document.getElementById("10") 
  of10.textContent = localStorage.getItem("10:00 AM");

  var of11 = document.getElementById("11") 
  of11.textContent = localStorage.getItem("11:00 AM");

  var of12 = document.getElementById("12") 
  of12.textContent = localStorage.getItem("12:00 PM");

  var of13 = document.getElementById("13") 
  of13.textContent = localStorage.getItem("1:00 PM");

  var of14 = document.getElementById("14") 
  of14.textContent = localStorage.getItem("2:00 PM");

  var of15 = document.getElementById("15") 
  of15.textContent = localStorage.getItem("3:00 PM");

  var of16 = document.getElementById("16") 
  of16.textContent = localStorage.getItem("4:00 PM");

  var of17 = document.getElementById("17") 
  of17.textContent = localStorage.getItem("5:00 PM");
}

function init() {
  renderInput();
}
init();
