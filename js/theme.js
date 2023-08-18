if (localStorage.getItem("colorTheme") === "classic") {
  changeColorThemeClassic();
} else if (localStorage.getItem("colorTheme") === "white") {
  changeColorTheme();
}

function changeColorTheme() {
  localStorage.removeItem("colorTheme");
  localStorage.setItem("colorTheme", "white");
  // меняем body
  const body = document.querySelector("body");
  body.style.backgroundColor = "rgb(232, 225, 225";

  //меняем модальное окно для ежедневных заметок
  const modalWindow = document.querySelector(".modal-window");
  if (modalWindow !== null) {
    modalWindow.classList.add("modal-window-change");
    const titleModalWindow = document.querySelector(".title-modal-window");
    titleModalWindow.style.color = "black";
    const inputModalWindow = document.querySelector(".input-modal-window");
    inputModalWindow.style.border = "1px solid black";
    const chooseTime = document.querySelector(".choose-time");
    chooseTime.style.color = "black";
    const divInnerChooseTime = document.querySelector(".div-inner-choose-time");
    divInnerChooseTime.style.border = "2px solid black";
    const iconForShooseeTime = document.querySelector(".icon-for-shosee-time");
    iconForShooseeTime.style.borderTop = "4px solid black";
    iconForShooseeTime.style.borderRight = "4px solid black";
    const setTime = document.querySelector(".set-time");
    if (setTime !== null) {
      setTime.style.border = "2px solid black";
      setTime.style.backgroundColor = "white";
      setTime.classList.add("set-time-change");
    }
    const divForColorAndIcon = document.querySelector(
      ".div-for-color-and-icon"
    );
    divForColorAndIcon.style.border = "2px solid black";
    const iconForColorChoose = document.querySelector(".icon-for-color-choose");
    iconForColorChoose.style.borderTop = "2px solid black";
    iconForColorChoose.style.borderRight = "2px solid black";
    const colorInnerDiv = document.querySelector(".color-inner-div");
    colorInnerDiv.style.border = "1px solid black";
    const colorSet = document.querySelector(".color-set");
    if (colorSet !== null) {
      colorSet.style.border = "2px solid black";
      colorSet.style.backgroundColor = "white";
    }
  }

  //меняем модальное окно для создания папки
  const modalWindowFolder = document.querySelector(".modal-window-folder");
  if (modalWindowFolder !== null) {
    modalWindowFolder.style.backgroundColor = "white";
    modalWindowFolder.style.border = "5px solid black";
    const inputModalFolder = document.querySelector(".input-modal-folder");
    inputModalFolder.style.border = "1px solid black";
    const titleModalFolder = document.querySelector(".title-modal-folder");
    titleModalFolder.style.color = "black";
    const submitModalFolder = document.querySelector(".submit-modal-folder");
    submitModalFolder.classList.add("submit-modal-folder-change");
  }

  //меняем модальное окно для подтверждения удаления папки
  const windowForDelNoteInnerFolder = document.querySelector(
    ".window-for-del-note-inner-folder"
  );
  if (windowForDelNoteInnerFolder !== null) {
    windowForDelNoteInnerFolder.style.backgroundColor = "white";
    windowForDelNoteInnerFolder.style.border = "5px solid black";
    const titleInnerWindow = document.querySelector(".title-inner-window");
    titleInnerWindow.style.color = "black";
  }

  //меняем шапку
  const nav = document.querySelector(".nav");
  nav.style.border = "1px solid #67665d";
  nav.style.borderBottomColor = "black";
  nav.style.color = "black";
  nav.style.boxShadow = "0 0 10px 3px rgba(1,1,1,0.7)";
  nav.style.textShadow = "black 1px 0 10px";

  //меняем календарь
  const calendar = document.querySelector(".calendar");
  calendar.style.backgroundColor = "white";
  calendar.style.boxShadow = "0 0 5px 3px black";
  const titleAndBtnCalendar = document.querySelector(".title-and-btn-calendar");
  titleAndBtnCalendar.style.backgroundColor = "black";
  titleAndBtnCalendar.style.color = "white";
  titleAndBtnCalendar.style.boxShadow = "0 0 5px 3px black";
  const calendarIconLeft = document.querySelector(".calendar-icon-left");
  calendarIconLeft.classList.add("calendar-icon-left-change");
  const calendarIconRight = document.querySelector(".calendar-icon-right");
  calendarIconRight.classList.add("calendar-icon-right-change");

  const nameDay = document.querySelectorAll(".nameDay");
  for (let i of nameDay) {
    i.style.backgroundColor = "white";
    i.style.color = "black";
    i.style.border = "1px solid black";
    i.style.backgroundColor.hover = "blue";
  }
  const numberDay = document.querySelectorAll(".number-day");
  for (let i of numberDay) {
    i.classList.add("number-day-change");
  }
  if (document.querySelector(".now-day") !== null) {
    const nowDay = document.querySelector(".now-day");
    nowDay.style.backgroundColor = "black";
    nowDay.style.color = "white";
  }

  // меняем ежедневные заметки
  const divDateAndEverydayNotes = document.querySelector(
    ".div-date-and-everyday-notes"
  );
  divDateAndEverydayNotes.style.backgroundColor = "white";
  divDateAndEverydayNotes.style.boxShadow = "0 0 5px 3px black";
  const divDate = document.querySelector(".div-date");
  divDate.style.backgroundColor = "black";
  divDate.style.color = "white";
  divDate.style.boxShadow = "0 -2px 5px 3px black";
  const iconStringDown = document.querySelector(".icon-string-down");
  iconStringDown.classList.add("icon-string-down-change");
  const everydayNotesSet = document.querySelector(".everyday-notes-set");
  everydayNotesSet.classList.add("everyday-notes-set-change");
  const everydayNotesItem = document.querySelectorAll(".everyday-notes-item");
  for (let i of everydayNotesItem) {
    i.classList.add("everyday-notes-item-change");
  }
  const everydayNotesTime = document.querySelectorAll(".everyday-notes-time");
  for (let i of everydayNotesTime) {
    i.classList.add("everyday-notes-time-change");
  }
  const btnEveryday = document.querySelectorAll(".btn-everyday");
  for (let i of btnEveryday) {
    i.classList.add("btn-everyday-change");
  }

  //меняем тайм-лайн
  const timelineSet = document.querySelector(".timeline-set");
  timelineSet.style.backgroundColor = "white";
  timelineSet.style.boxShadow = "0 0 5px 3px black";
  const timelineItem = document.querySelectorAll(".timeline-item");
  for (let i of timelineItem) {
    i.classList.add("timeline-item-change");
  }
  const timeOfTimeline = document.querySelectorAll(".time-of-timeline");
  for (let i of timeOfTimeline) {
    i.style.borderRight = "5px solid #67665d";
  }

  //меняем админ-панель
  const adminPanel = document.querySelector(".admin-panel");
  adminPanel.classList.add("admin-panel-change");
  const changeTheme = document.querySelector(".change-theme");
  changeTheme.style.backgroundColor = "rgba(1, 1, 1, 0.3)";
  changeTheme.style.transition = "0.2s";
  changeTheme.addEventListener("mouseover", function () {
    changeTheme.style.backgroundColor = "rgba(1, 1, 1, 0.7)";
  });
  changeTheme.addEventListener("mouseout", function () {
    changeTheme.style.backgroundColor = "rgba(1, 1, 1, 0.3)";
  });

  const placeForFolders = document.querySelector(".place-for-folders");
  placeForFolders.style.backgroundColor = "white";
  placeForFolders.style.boxShadow = "0 0 5px 3px black";
  const btnNewFolder = document.querySelector(".btn-new-folder");
  btnNewFolder.style.color = "black";
  btnNewFolder.style.borderBottom = "2px solid black";
  btnNewFolder.addEventListener("mouseover", function () {
    btnNewFolder.style.color = "white";
  });
  btnNewFolder.addEventListener("mouseout", function () {
    btnNewFolder.style.color = "black";
  });
  const newFoldersSet = document.querySelector(".new-folders-set");
  newFoldersSet.classList.add("new-folders-set-change");

  //меняем сами папки
  const foldersItem = document.querySelectorAll(".folders-item");
  for (let i of foldersItem) {
    i.style.backgroundColor = "#67665d";
  }

  //меняем место для заметок в папках
  const doList = document.querySelector(".do-list");
  doList.style.backgroundColor = "white";
  doList.style.boxShadow = "0 0 5px 3px black";
  const setFolderDoList = document.querySelector(".set-folder-do-list");
  if (setFolderDoList !== null) {
    setFolderDoList.classList.add("set-folder-do-list-change");
  }
  const inputInnerFolder = document.querySelector(".input-inner-folder");
  if (inputInnerFolder !== null) {
    inputInnerFolder.style.color = "black";
  }
}

function changeColorThemeClassic() {
  localStorage.removeItem("colorTheme");
  localStorage.setItem("colorTheme", "classic");
  // меняем body
  const body = document.querySelector("body");
  body.style.backgroundColor = null;

  //меняем модальное окно для ежедневных заметок
  const modalWindow = document.querySelector(".modal-window");
  if (modalWindow !== null) {
    modalWindow.classList.remove("modal-window-change");
    const titleModalWindow = document.querySelector(".title-modal-window");
    titleModalWindow.style.color = null;
    const inputModalWindow = document.querySelector(".input-modal-window");
    inputModalWindow.style.border = null;
    const chooseTime = document.querySelector(".choose-time");
    chooseTime.style.color = null;
    const divInnerChooseTime = document.querySelector(".div-inner-choose-time");
    divInnerChooseTime.style.border = null;
    const iconForShooseeTime = document.querySelector(".icon-for-shosee-time");
    iconForShooseeTime.style.borderTop = null;
    iconForShooseeTime.style.borderRight = null;
    const setTime = document.querySelector(".set-time");
    if (setTime !== null) {
      setTime.style.border = null;
      setTime.style.backgroundColor = null;
      setTime.classList.remove("set-time-change");
    }
    const divForColorAndIcon = document.querySelector(
      ".div-for-color-and-icon"
    );
    divForColorAndIcon.style.border = null;
    const iconForColorChoose = document.querySelector(".icon-for-color-choose");
    iconForColorChoose.style.borderTop = null;
    iconForColorChoose.style.borderRight = null;
    const colorInnerDiv = document.querySelector(".color-inner-div");
    colorInnerDiv.style.border = null;
    const colorSet = document.querySelector(".color-set");
    if (colorSet !== null) {
      colorSet.style.border = null;
      colorSet.style.backgroundColor = null;
    }
  }

  //меняем модальное окно для создания папки
  const modalWindowFolder = document.querySelector(".modal-window-folder");
  if (modalWindowFolder !== null) {
    modalWindowFolder.style.backgroundColor = null;
    modalWindowFolder.style.border = null;
    const inputModalFolder = document.querySelector(".input-modal-folder");
    inputModalFolder.style.border = null;
    const titleModalFolder = document.querySelector(".title-modal-folder");
    titleModalFolder.style.color = null;
    const submitModalFolder = document.querySelector(".submit-modal-folder");
    submitModalFolder.classList.remove("submit-modal-folder-change");
  }

  //меняем модальное окно для подтверждения удаления папки
  const windowForDelNoteInnerFolder = document.querySelector(
    ".window-for-del-note-inner-folder"
  );
  if (windowForDelNoteInnerFolder !== null) {
    windowForDelNoteInnerFolder.style.backgroundColor = null;
    windowForDelNoteInnerFolder.style.border = null;
    const titleInnerWindow = document.querySelector(".title-inner-window");
    titleInnerWindow.style.color = null;
  }

  //меняем шапку
  const nav = document.querySelector(".nav");
  nav.style.border = null;
  nav.style.borderBottomColor = null;
  nav.style.color = null;
  nav.style.boxShadow = null;
  nav.style.textShadow = null;

  //меняем календарь
  const calendar = document.querySelector(".calendar");
  calendar.style.backgroundColor = null;
  calendar.style.boxShadow = null;
  const titleAndBtnCalendar = document.querySelector(".title-and-btn-calendar");
  titleAndBtnCalendar.style.backgroundColor = null;
  titleAndBtnCalendar.style.color = null;
  titleAndBtnCalendar.style.boxShadow = null;
  const calendarIconLeft = document.querySelector(".calendar-icon-left");
  calendarIconLeft.classList.remove("calendar-icon-left-change");
  const calendarIconRight = document.querySelector(".calendar-icon-right");
  calendarIconRight.classList.remove("calendar-icon-right-change");

  const nameDay = document.querySelectorAll(".nameDay");
  for (let i of nameDay) {
    i.style.backgroundColor = null;
    i.style.color = null;
    i.style.border = null;
    i.style.backgroundColor.hover = null;
  }
  const numberDay = document.querySelectorAll(".number-day");
  for (let i of numberDay) {
    i.classList.remove("number-day-change");
  }
  if (document.querySelector(".now-day") !== null) {
    const nowDay = document.querySelector(".now-day");
    nowDay.style.backgroundColor = null;
    nowDay.style.color = null;
  }

  // меняем ежедневные заметки
  const divDateAndEverydayNotes = document.querySelector(
    ".div-date-and-everyday-notes"
  );
  divDateAndEverydayNotes.style.backgroundColor = null;
  divDateAndEverydayNotes.style.boxShadow = null;
  const divDate = document.querySelector(".div-date");
  divDate.style.backgroundColor = null;
  divDate.style.color = null;
  divDate.style.boxShadow = null;
  const iconStringDown = document.querySelector(".icon-string-down");
  iconStringDown.classList.remove("icon-string-down-change");
  const everydayNotesSet = document.querySelector(".everyday-notes-set");
  everydayNotesSet.classList.remove("everyday-notes-set-change");
  const everydayNotesItem = document.querySelectorAll(".everyday-notes-item");
  for (let i of everydayNotesItem) {
    i.classList.remove("everyday-notes-item-change");
  }
  const everydayNotesTime = document.querySelectorAll(".everyday-notes-time");
  for (let i of everydayNotesTime) {
    i.classList.remove("everyday-notes-time-change");
  }
  const btnEveryday = document.querySelectorAll(".btn-everyday");
  for (let i of btnEveryday) {
    i.classList.remove("btn-everyday-change");
  }

  //меняем тайм-лайн
  const timelineSet = document.querySelector(".timeline-set");
  timelineSet.style.backgroundColor = null;
  timelineSet.style.boxShadow = null;
  const timelineItem = document.querySelectorAll(".timeline-item");
  for (let i of timelineItem) {
    i.classList.remove("timeline-item-change");
  }
  const timeOfTimeline = document.querySelectorAll(".time-of-timeline");
  for (let i of timeOfTimeline) {
    i.style.borderRight = null;
  }

  //меняем админ-панель
  const adminPanel = document.querySelector(".admin-panel");
  adminPanel.classList.remove("admin-panel-change");
  const changeTheme = document.querySelector(".change-theme");
  changeTheme.style.backgroundColor = null;
  changeTheme.style.transition = null;
  changeTheme.addEventListener("mouseover", function () {
    changeTheme.style.backgroundColor = null;
  });
  changeTheme.addEventListener("mouseout", function () {
    changeTheme.style.backgroundColor = null;
  });

  // меняем места для папок
  const placeForFolders = document.querySelector(".place-for-folders");
  placeForFolders.style.backgroundColor = null;
  placeForFolders.style.boxShadow = null;
  const btnNewFolder = document.querySelector(".btn-new-folder");
  btnNewFolder.style.color = null;
  btnNewFolder.style.borderBottom = null;
  btnNewFolder.addEventListener("mouseover", function () {
    btnNewFolder.style.color = null;
  });
  btnNewFolder.addEventListener("mouseout", function () {
    btnNewFolder.style.color = null;
  });
  const newFoldersSet = document.querySelector(".new-folders-set");
  newFoldersSet.classList.remove("new-folders-set-change");

  //меняем сами папки
  const foldersItem = document.querySelectorAll(".folders-item");
  for (let i of foldersItem) {
    i.style.backgroundColor = null;
  }

  //меняем место для заметок в папках
  const doList = document.querySelector(".do-list");
  doList.style.backgroundColor = null;
  doList.style.boxShadow = null;
  const setFolderDoList = document.querySelector(".set-folder-do-list");
  if (setFolderDoList !== null) {
    setFolderDoList.classList.remove("set-folder-do-list-change");
  }
  const inputInnerFolder = document.querySelector(".input-inner-folder");
  if (inputInnerFolder !== null) {
    inputInnerFolder.style.color = null;
  }
}

window.addEventListener("click", function (event) {
  if (
    (event.target.classList.contains("change-theme") &&
      document.querySelector(".div-for-set-choose-theme") === null) ||
    (event.target.classList.contains("image-palitra") &&
      document.querySelector(".div-for-set-choose-theme") === null)
  ) {
    const divForSetChooseTheme = document.createElement("div");
    divForSetChooseTheme.setAttribute("class", "div-for-set-choose-theme");
    const setChooseTheme = document.createElement("ul");
    setChooseTheme.setAttribute("class", "set-choose-theme");
    const itemChooseTheme1 = document.createElement("li");
    itemChooseTheme1.setAttribute("class", "item-choose-theme");
    const divInnerItem1 = document.createElement("div");
    divInnerItem1.setAttribute("class", "div-inner-item-one");
    itemChooseTheme1.append(divInnerItem1);
    const itemChooseTheme2 = document.createElement("li");
    itemChooseTheme2.setAttribute("class", "item-choose-theme");
    const divInnerItem2 = document.createElement("div");
    divInnerItem2.setAttribute("class", "div-inner-item-two");
    itemChooseTheme2.append(divInnerItem2);
    setChooseTheme.append(itemChooseTheme1, itemChooseTheme2);
    divForSetChooseTheme.append(setChooseTheme);

    const image = document.querySelector(".change-theme");
    image.classList.add("image-palitra-relative");
    image.append(divForSetChooseTheme);
  } else if (document.querySelector(".div-for-set-choose-theme") !== null) {
    const image = document.querySelector(".change-theme");
    image.classList.remove("image-palitra-relative");
    const div = document.querySelector(".div-for-set-choose-theme");
    div.remove();
  }

  //меняем тему
  window.addEventListener("click", function (e) {
    if (e.target.classList.contains("div-inner-item-two")) {
      changeColorTheme();
    } else if (e.target.classList.contains("div-inner-item-one")) {
      changeColorThemeClassic();
    }
  });
});
