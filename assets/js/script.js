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

// var buttonParent = document.querySelector(".container")

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
  console.log(event);
  // console.log(event.target.previousElementSibling.value);
  // console.log(event.path[1].children[0].innerText);
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
  // Save related form data as an object
  var temporary = [];
  var time = y;
  var text = x;
  var scheduleInput = { time: time, text: text };

  if (JSON.parse(localStorage.getItem("scheduleInput"))) {
    temporary = JSON.parse(localStorage.getItem("scheduleInput"));

    const newArr = temporary.filter((object) => {
      return object.time !== time;
    });
    temporary = newArr;
  }
  temporary.push(scheduleInput);
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("scheduleInput", JSON.stringify(temporary));
}

var scheduleInput = [];

function renderInput() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastInput = JSON.parse(localStorage.getItem("scheduleInput"));
  if (lastInput) {
    // Check if data is returned, if not exit out of the function
    lastInput.forEach((element) => {
      var checkTime = element.time;
      var checkText = element.text;
      for (let i = 0; i < lastInput.length; i++) {
        var checkID = document.querySelectorAll(".hour")[i].textContent;
        console.log(checkID);
        if (checkTime == checkID) {
          timeBlocks.textContent = checkText;
        }
      }
    });
  }
}
function savePage() {
 $("#09").text(localStorage.getItem(scheduleInput));
 $("#10").text(localStorage.getItem(scheduleInput));
};
savePage();
//getItem 8 separate times text content = localStorage.getItem(scheduleInput)
//target hour 9

function init() {
  renderInput();
}
init();
