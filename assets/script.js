//Variables
var currentDay = document.getElementById("currentDay");
var scheduleText = document.getElementById("scheduleText")

var savedEvent = document.getElementById("savedEvent")

//as page opens


var localEventTasks = localStorage.getItem('events');
var eventTasks = ['', '', '', '', '', '', '', '', ''];
if (localEventTasks) {
  eventTasks = JSON.parse(localEventTasks);
}

var ins = document.querySelectorAll("div.scheduleBlock input");
var btns = document.querySelectorAll("div.scheduleBlock .saveBtn")
var background = document.querySelectorAll("div.scheduleBlock .description")

for (let i = 0; i < eventTasks.length; i++) {
  ins[i].value = eventTasks[i];
  btns[i].onclick = function () {
    eventTasks[i] = ins[i].value;
    localStorage.setItem('events', JSON.stringify(eventTasks));
  }
}

//current day text
const m = moment();
console.log(m.toString())
currentDay.textContent = m.format("dddd MMMM Do ,YYYY");

//schedule event text



var eventTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17]

renderTimeShades();


function renderTimeShades() {
  const currentTime = (new Date()).getHours();
  for (let i = 0; i < eventTimes.length; i++) {


    const eventHour = eventTimes[i];

    if (currentTime === eventHour) {
      background[i].classList.remove('past');
      background[i].classList.remove('future');
      background[i].classList.add('present');
      ins[i].style = "color:white;"

    } else if (currentTime < eventHour) {
      background[i].classList.remove('past');
      background[i].classList.add('future');
      background[i].classList.remove('present');
      ins[i].style = "color:white;"
    } else if (currentTime > eventHour) {
      background[i].classList.add('past');
      background[i].classList.remove('future');
      background[i].classList.remove('present');
      ins[i].style = "color:white;"
    }
  }
}


setInterval(renderTimeShades, 1000);




