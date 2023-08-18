// month, day
const newDate = new Date();
const monthForThis = newDate.getMonth();
const dayForThic = newDate.getDate();
const yearForThis = newDate.getFullYear();

const calendarIconLeft = document.querySelector(".calendar-icon-left");
const calendarIconRight = document.querySelector(".calendar-icon-right");
const monthOfCalendar = document.querySelector(".title-calendar");
const calendarDays = document.querySelector(".day-of-calendar");

function writeMonthCalendar() {
  if (month == "01") {
    monthOfCalendar.textContent = "January" + " " + year;
  } else if (month == "02") {
    monthOfCalendar.textContent = "February" + " " + year;
  } else if (month == "03") {
    monthOfCalendar.textContent = "March" + " " + year;
  } else if (month == "04") {
    monthOfCalendar.textContent = "April" + " " + year;
  } else if (month == "05") {
    monthOfCalendar.textContent = "May" + " " + year;
  } else if (month == "06") {
    monthOfCalendar.textContent = "June" + " " + year;
  } else if (month == "07") {
    monthOfCalendar.textContent = "July" + " " + year;
  } else if (month == "08") {
    monthOfCalendar.textContent = "August" + " " + year;
  } else if (month == "09") {
    monthOfCalendar.textContent = "September" + " " + year;
  } else if (month == 10) {
    monthOfCalendar.textContent = "October" + " " + year;
  } else if (month == 11) {
    monthOfCalendar.textContent = "November" + " " + year;
  } else if (month == 12) {
    monthOfCalendar.textContent = "December" + " " + year;
  }
}
writeMonthCalendar();

function createCalendar(elem, year, month) {
  elem = document.querySelector(elem);
  let mon = month - 1;
  let d = new Date(year, mon);

  let calendar = `<ul class="days-of-week-set">
  <li class="nameDay">Mo</li>
  <li class="nameDay">Tu</li>
  <li class="nameDay">We</li>
  <li class="nameDay">Th</li>
  <li class="nameDay">Fr</li>
  <li class="nameDay">Sa</li>
  <li class="nameDay">Su</li>
  </ul>`;

  let days = `<ul class="days">`;

  for (let i = 0; i < getDay(d); i++) {
    days += `<li class="number-day"></li>`;
  }
  calendar += days;

  while (d.getMonth() == mon) {
    if (
      d.getDate() == dayForThic &&
      d.getFullYear() == yearForThis &&
      d.getMonth() == monthForThis
    ) {
      calendar += `<li class="number-day now-day">${d.getDate()}</li>`;
    } else {
      calendar += `<li class="number-day">${d.getDate()}</li>`;
    }
    if (getDay(d) % 7 == 6) {
      calendar += `</ul><ul class="days">`;
    }
    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      calendar += `<li class="number-day"></li>`;
    }
  }

  elem.innerHTML = calendar;
}

createCalendar(".day-of-calendar", year, month);

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

calendarIconLeft.addEventListener("click", function () {
  if (month == 1) {
    month = 12;
    year = Number(year) - 1;
    createCalendar(".day-of-calendar", year, month);
    writeMonthCalendar();
  } else {
    month = month - 1;
    createCalendar(".day-of-calendar", year, month);
    writeMonthCalendar();
  }
  if (
    document
      .querySelector(".calendar-icon-left")
      .classList.contains("calendar-icon-left-change")
  ) {
    changeColorTheme();
  }
});

month = month - 0;
calendarIconRight.addEventListener("click", function () {
  if (month != 12) {
    year = year;
    month = month + 1;
    createCalendar(".day-of-calendar", year, month);
    writeMonthCalendar();
  } else {
    month = 1;
    year = Number(year) + 1;
    createCalendar(".day-of-calendar", year, month);
    writeMonthCalendar();
  }
  if (
    document
      .querySelector(".calendar-icon-right")
      .classList.contains("calendar-icon-right-change")
  ) {
    changeColorTheme();
  }
});
