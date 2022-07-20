//variables

//time counter
function updateTime() {
    let currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMM Do YYYY, h:mm:ss"));
}
$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});
//changing color for timeblocks (past, present, future)

//save input to local storage
