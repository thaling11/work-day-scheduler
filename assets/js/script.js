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
    time17
];

//header time counter
function updateTime() {
    let currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMM Do YYYY, h:mm:ss a"));
};
$(function () {
    updateTime();
    setInterval(updateTime, 1000);
});

//changing color for timeblocks (past, present, future)
function checkTime () {
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
};

checkTime();
//check every minute
setInterval(checkTime(), (1000 * 60) * 1);


//save input to local storage
