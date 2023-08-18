const textTime = document.querySelector(".time");
const textDay = document.querySelector(".day");
let year, month, day, hours, minute, dayOfWeek;

createDate();
setInterval(function () {
  createDate();
  console.log("kostil");
}, 60000);

const date = new Date();
year = date.getFullYear().toString();
month = date.getMonth() + 1;
month = addZero(month, month);
day = date.getDate();
day = addZero(day, day);
hours = date.getHours();
hours = addZero(hours, hours);
minute = date.getMinutes();
minute = addZero(minute, minute);
dayOfWeek = date.getDay();
if (dayOfWeek === 0) {
  dayOfWeek = "Sunday";
} else if (dayOfWeek === 1) {
  dayOfWeek = "Monday";
} else if (dayOfWeek === 2) {
  dayOfWeek = "Tuesday";
} else if (dayOfWeek === 3) {
  dayOfWeek = "Wednesday";
} else if (dayOfWeek === 4) {
  dayOfWeek = "Thursday";
} else if (dayOfWeek === 5) {
  dayOfWeek = "Friday";
} else if (dayOfWeek === 6) {
  dayOfWeek = "Saturday";
}
function addZero(item, data) {
  if (item < 10) {
    item = "0" + data;
  } else {
    item = data;
  }
  return item;
}
textTime.textContent = `${hours}:${minute}`;
textDay.textContent = `${dayOfWeek}`;

function createDate() {
  const date = new Date();

  hours = date.getHours();
  hours = addZero(hours, hours);
  minute = date.getMinutes();
  minute = addZero(minute, minute);

  function addZero(item, data) {
    if (item < 10) {
      item = "0" + data;
    } else {
      item = data;
    }
    return item;
  }
  textTime.textContent = `${hours}:${minute}`;
}
