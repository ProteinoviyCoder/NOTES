const divForImgFolder = document.querySelector(".div-for-img-folder");
const ImgFolder = document.querySelector(".img-folder");
const foldersSet = document.querySelector(".new-folders-set");
let valueDelFolders = false;
let coreTarget;
let li;
let valueInput = false;

let arrayFolders = [];
if (localStorage.getItem("arrayFolders") !== null) {
  arrayFolders = JSON.parse(localStorage.getItem("arrayFolders"));
  for (let i of arrayFolders) {
    foldersSet.insertAdjacentHTML("beforeend", i);
  }
}

//значение окна, false - окно можно создать(окно закрыто) && true - окно нельзя создать(окно открыто)
let modalWindowFolderValue = false;

window.addEventListener("click", function (event) {
  if (
    (event.target.classList.contains("btn-new-folder") &&
      modalWindowFolderValue === false) ||
    (event.target.classList.contains("text-name-btn-new-folder") &&
      modalWindowFolderValue === false) ||
    (event.target.classList.contains("plus") &&
      modalWindowFolderValue === false)
  ) {
    // Создаём модальное окно и его компоненты по нажатию кнопки
    const modalWindowFolder = document.createElement("div");
    modalWindowFolder.setAttribute("class", "modal-window-folder");
    const divForBtnCloseModalFolder = document.createElement("div");
    divForBtnCloseModalFolder.setAttribute(
      "class",
      "div-for-btn-close-modal-folder"
    );
    const btnCloseModalFolder = document.createElement("button");
    btnCloseModalFolder.setAttribute("class", "btn-close-modal-folder");
    const divInnerBtnCloseModalFolder = document.createElement("div");
    divInnerBtnCloseModalFolder.setAttribute(
      "class",
      "div-inner-btn-close-modal-folder"
    );
    btnCloseModalFolder.append(divInnerBtnCloseModalFolder);
    divForBtnCloseModalFolder.append(btnCloseModalFolder);
    const titleModalFolder = document.createElement("h2");
    titleModalFolder.setAttribute("class", "title-modal-folder");
    titleModalFolder.textContent = "Maybe 'Work list' or 'New life'?";

    const formModalFolder = document.createElement("form");
    formModalFolder.setAttribute("class", "form-modal-folder");
    const inputModalFolder = document.createElement("input");
    inputModalFolder.setAttribute("type", "text");
    inputModalFolder.value = "";
    inputModalFolder.setAttribute("class", "input-modal-folder");
    const submitModalFolder = document.createElement("input");
    submitModalFolder.setAttribute("type", "submit");
    submitModalFolder.setAttribute("class", "submit-modal-folder");
    submitModalFolder.value = "Create";
    formModalFolder.append(inputModalFolder, submitModalFolder);

    //  Объеденяем компоненты окна
    modalWindowFolder.append(
      divForBtnCloseModalFolder,
      titleModalFolder,
      formModalFolder
    );

    // Выводим окно в body
    document.body.append(modalWindowFolder);

    //обновляем под текущую тему
    if (localStorage.getItem("colorTheme") === "white") {
      changeColorTheme();
    } else if (localStorage.getItem("colorTheme") === "classic") {
      changeColorThemeClassic();
    }

    //ставим фокус на инпут
    inputModalFolder.focus();

    //меняем значение окна на открытое, такое же создать нельзя
    modalWindowFolderValue = true;
  }
});

//описываем функцию закрытия окна
window.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("btn-close-modal-folder") ||
    event.target.classList.contains("div-inner-btn-close-modal-folder")
  ) {
    let modalWindowFolder;
    if (document.querySelector(".modal-window-folder") !== null) {
      modalWindowFolder = document.querySelector(".modal-window-folder");
    }
    modalWindowFolder.remove();
    modalWindowFolderValue = false;
  }
});

// создаём новую папку, добавляем её в список и удаляем модальное окно для папок
window.addEventListener("click", function (event) {
  event.preventDefault();
  let inputModalFolder, modalWindowFolder;
  if (document.querySelector(".input-modal-folder") !== null) {
    inputModalFolder = document.querySelector(".input-modal-folder");
  }
  if (document.querySelector(".modal-window-folder") !== null) {
    modalWindowFolder = document.querySelector(".modal-window-folder");
  }
  const textWrong = document.createElement("p");
  textWrong.setAttribute("class", "text-wrong");
  textWrong.textContent =
    "This name alredy exists. Please, choose another name";

  if (event.target.classList.contains("submit-modal-folder")) {
    if (inputModalFolder.value != "") {
      const foldersItem = document.createElement("li");
      foldersItem.setAttribute("class", "folders-item");
      const foldersItemText = document.createElement("p");
      foldersItemText.setAttribute("class", "folders-item-text");
      foldersItemText.textContent = inputModalFolder.value;
      const foldersItemDel = document.createElement("p");
      foldersItemDel.setAttribute("class", "folders-item-del");
      foldersItemDel.textContent = "Del";
      foldersItem.append(foldersItemText, foldersItemDel);
      if (localStorage.getItem("arrayFolders") !== null) {
        arrayFolders = JSON.parse(localStorage.getItem("arrayFolders"));
      } else {
        arrayFolders = [];
      }
      if (arrayFolders.includes(foldersItem.outerHTML) === true) {
        modalWindowFolder.append(textWrong);
      } else {
        localStorage.removeItem("arrayFolders");
        arrayFolders.splice(arrayFolders.length, 0, foldersItem.outerHTML);
        localStorage.setItem(
          `arraySetFolder${foldersItemText.textContent}`,
          ""
        );
        foldersSet.insertAdjacentHTML(
          "beforeend",
          arrayFolders[arrayFolders.length - 1]
        );
        localStorage.setItem("arrayFolders", JSON.stringify(arrayFolders));
        modalWindowFolder.remove();
        modalWindowFolderValue = false;

        inputModalFolder.value = "";
      }

      //обновляем под текущую тему
      if (localStorage.getItem("colorTheme") === "white") {
        changeColorTheme();
      } else if (localStorage.getItem("colorTheme") === "classic") {
        changeColorThemeClassic();
      }
    }
  }
});

// описываем функцию удаления папки
let aTarget;
window.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("folders-item-del") &&
    valueDelFolders === false
  ) {
    aTarget = event.target;
    valueDelFolders = true;
    const windowForDelNoteInnerFolder = document.createElement("div");
    windowForDelNoteInnerFolder.setAttribute(
      "class",
      "window-for-del-note-inner-folder"
    );
    const divCloseInnerWindow = document.createElement("div");
    divCloseInnerWindow.setAttribute("class", "div-close-inner-window");
    const btnCloseInnerDivInnerWindow = document.createElement("button");
    btnCloseInnerDivInnerWindow.setAttribute(
      "class",
      "btn-close-inner-div-inner-window"
    );
    const closeInnerWindow = document.createElement("div");
    closeInnerWindow.setAttribute("class", "close-inner-window");
    btnCloseInnerDivInnerWindow.append(closeInnerWindow);
    divCloseInnerWindow.append(btnCloseInnerDivInnerWindow);
    const titleInnerWindow = document.createElement("h2");
    titleInnerWindow.setAttribute("class", "title-inner-window");
    titleInnerWindow.textContent = "Are you serious?";
    const divForBtnInnerWindow = document.createElement("div");
    divForBtnInnerWindow.setAttribute("class", "div-for-btn-inner-window");
    const btnYesInnerWindow = document.createElement("button");
    btnYesInnerWindow.setAttribute("class", "btn-yes-inner-window");
    btnYesInnerWindow.textContent = "Yes";
    const btnNoInnerWindow = document.createElement("button");
    btnNoInnerWindow.setAttribute("class", "btn-no-inner-window");
    btnNoInnerWindow.textContent = "No";
    divForBtnInnerWindow.append(btnYesInnerWindow, btnNoInnerWindow);

    windowForDelNoteInnerFolder.append(
      divCloseInnerWindow,
      titleInnerWindow,
      divForBtnInnerWindow
    );

    //выводим в body
    document.body.append(windowForDelNoteInnerFolder);

    //обновляем под текущую тему
    if (localStorage.getItem("colorTheme") === "classic") {
      changeColorThemeClassic();
    } else if (localStorage.getItem("colorTheme") === "white") {
      changeColorTheme();
    }
  }
});

// кнопка для закрытия окна отоброжения заметок внутри папки
window.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("btn-no-inner-window") ||
    e.target.classList.contains("btn-close-inner-div-inner-window") ||
    e.target.classList.contains("close-inner-window")
  ) {
    let windowForDelNoteInnerFolder;
    if (document.querySelector(".window-for-del-note-inner-folder") !== null) {
      windowForDelNoteInnerFolder = document.querySelector(
        ".window-for-del-note-inner-folder"
      );
    }
    windowForDelNoteInnerFolder.innerHTML = null;
    windowForDelNoteInnerFolder.remove();
    valueDelFolders = false;
  } else if (e.target.classList.contains("btn-yes-inner-window")) {
    let windowForDelNoteInnerFolder;
    if (document.querySelector(".window-for-del-note-inner-folder") !== null) {
      windowForDelNoteInnerFolder = document.querySelector(
        ".window-for-del-note-inner-folder"
      );
    }
    windowForDelNoteInnerFolder.remove();
    valueDelFolders = false;
  }
});

// кнопка для подтверждения удаления папки
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-yes-inner-window")) {
    const array = JSON.parse(localStorage.getItem("arrayFolders"));
    localStorage.removeItem("arrayFolders");
    const setFolders = document.querySelectorAll(".folders-item");
    let iValue = -1;
    for (let i of setFolders) {
      iValue++;
      if (
        i.firstChild.textContent ===
        aTarget.closest("li").firstChild.textContent
      ) {
        console.log(iValue);
        i.remove();
        // const value = array.indexOf(i.outerHTML);
        const valueText = i.firstChild.textContent;
        array.splice(iValue, 1);
        localStorage.removeItem(`arraySetFolder${valueText}`);

        localStorage.setItem("arrayFolders", JSON.stringify(array));

        const doList = document.querySelector(".do-list");
        doList.innerHTML = null;
        divForImgFolder.append(ImgFolder);
        doList.append(divForImgFolder);
      }
      i.classList.remove("border");
    }
  }
});

function createSetForFolder(item) {
  const set = `<div class="all-content-inner-folder">
  <div class="div-for-set-inner-folder">
  <ul class="set-folder-do-list">${item}</ul>
  </div>
  <div class="div-for-form-inner-folder">
  <form class="form-inner-folder">
  <input type="text" class="input-inner-folder" / >
  <input type="submit" value="add" class="submit-inner-folder" / >
  <button class="div-for-button-close-inner-folder">
  <div class="button-close-inner-folder"></div>
  </button>
  </div>
  </form>
  </div>`;
  return set;
}

// по нажатии на папку раскрываем её содержимое
window.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("folders-item") ||
    event.target.classList.contains("folders-item-text")
  ) {
    coreTarget = event.target;
    const placeForDoList = document.querySelector(".do-list");
    placeForDoList.innerHTML = null;
    placeForDoList.insertAdjacentHTML(
      "beforeend",
      createSetForFolder(
        localStorage.getItem(
          `arraySetFolder${event.target.firstChild.textContent}`
        )
      )
    );
    const folderItem = document.querySelectorAll(".folders-item");
    for (let i of folderItem) {
      i.classList.remove("border");
      i.style.borderBottom = "1px solid white";
      i.style.borderRadius = "0";
      i.style.textShadow = null;
      i.style.transition = "1s";
    }
    event.target.closest("li").classList.add("border");
    event.target.closest("li").style.borderRadius = "30px";
    event.target.closest("li").style.textShadow = "red 3px 0 4px";

    formInnerFolder = document.querySelector(".form-inner-folder");
    if (localStorage.getItem("colorTheme") === "white") {
      changeColorTheme();
    } else if (localStorage.getItem("colorTheme") === "classic") {
      changeColorThemeClassic();
    }
  }
});

// описываем функцию создания новой заметки, внутри папки
window.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.classList.contains("submit-inner-folder")) {
    const set = document.querySelector(".set-folder-do-list");
    const input = document.querySelector(".input-inner-folder");

    if (input.value !== "") {
      const liInnerFolder = document.createElement("li");
      liInnerFolder.setAttribute("class", "li-inner-folder");
      const textLiInnerFolder = document.createElement("p");
      textLiInnerFolder.setAttribute("class", "text-li-inner-folder");
      textLiInnerFolder.setAttribute("readonly", "readonly");
      textLiInnerFolder.textContent = input.value;
      const btnReadyInnerFolder = document.createElement("button");
      btnReadyInnerFolder.setAttribute("class", "btn-ready-inner-folder");
      btnReadyInnerFolder.textContent = "Ok";
      const btnDelInnerFolder = document.createElement("button");
      btnDelInnerFolder.setAttribute("class", "btn-del-inner-folder");
      btnDelInnerFolder.textContent = "Del";

      liInnerFolder.append(
        textLiInnerFolder,
        btnReadyInnerFolder,
        btnDelInnerFolder
      );

      set.prepend(liInnerFolder);

      input.value = "";
      focus(input);

      if (coreTarget.classList.contains("folders-item-text")) {
        localStorage.removeItem(
          `arraySetFolder${coreTarget.closest("li").firstChild.textContent}`
        );
        localStorage.setItem(
          `arraySetFolder${coreTarget.closest("li").firstChild.textContent}`,
          set.innerHTML
        );
      } else if (coreTarget.classList.contains("folders-item")) {
        localStorage.removeItem(
          `arraySetFolder${coreTarget.firstChild.textContent}`
        );
        localStorage.setItem(
          `arraySetFolder${coreTarget.firstChild.textContent}`,
          set.innerHTML
        );
      }
    }
  }
});

// при изменение заметки внутри папки, по нажатию на другую область, сохраняем изменения заметки и меняем поле ввода на обычный текст
window.addEventListener("click", function (event) {
  let inputChange;
  if (document.querySelector(".input-change") !== null) {
    inputChange = document.querySelector(".input-change");
  }

  if (
    document.querySelector(".input-change") !== null &&
    !event.target.classList.contains("li-inner-folder") &&
    event.target.outerHTML !== inputChange.closest("li").outerHTML &&
    event.target.outerHTML !== inputChange.closest("li").firstChild.outerHTML
  ) {
    const kostil2 = inputChange.closest("li");
    const value = inputChange.value;
    inputChange.remove();
    const p = document.createElement("p");
    p.setAttribute("class", "text-li-inner-folder");
    p.textContent = value;
    kostil2.prepend(p);
    valueInput = false;

    //сохраняем в локал
    const colectionSet = document.querySelector(".set-folder-do-list");
    const colection = document.querySelectorAll(".folders-item");
    for (let i of colection) {
      if (i.classList.contains("border")) {
        const result = i;
        localStorage.removeItem(
          `arraySetFolder${result.firstChild.textContent}`
        );
        localStorage.setItem(
          `arraySetFolder${result.firstChild.textContent}`,
          colectionSet.innerHTML
        );
      }
    }
  } else if (event.target.classList.contains("input-change")) {
    return;
  }
});

// меняем текст заметки по нажатию на заметку внутри папки. Меняем обычный текст на поле для ввода
window.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("text-li-inner-folder") &&
    !event.target.closest("li").classList.contains("li-inner-folder-ready")
  ) {
    li = event.target.closest("li");
    const text = event.target.textContent;
    event.target.remove();
    const inputChange = document.createElement("input");
    inputChange.setAttribute("type", "text");
    inputChange.setAttribute("class", "input-change");
    inputChange.value = text;
    li.prepend(inputChange);
    inputChange.focus();
    valueInput = true;
  }
});

// при изменении заметки внутри папки, по нажатию на enter сохраняем изменения, меняем поле ввода на обычный текст
window.addEventListener("keypress", function (e) {
  if (document.querySelector(".input-change") !== null) {
    let inputChange = document.querySelector(".input-change");
    if (e.target.classList.contains("input-change")) {
      if (e.which === 13) {
        e.preventDefault();
        const value = inputChange.value;
        inputChange.remove();
        const p = document.createElement("p");
        p.setAttribute("class", "text-li-inner-folder");
        p.textContent = value;
        li.closest("li").prepend(p);
        valueInput = true;

        //сохраняем в локал
        const colectionSet = document.querySelector(".set-folder-do-list");
        const colection = document.querySelectorAll(".folders-item");
        for (let i of colection) {
          if (i.classList.contains("border")) {
            const result = i;
            localStorage.removeItem(
              `arraySetFolder${result.firstChild.textContent}`
            );
            localStorage.setItem(
              `arraySetFolder${result.firstChild.textContent}`,
              colectionSet.innerHTML
            );
          }
        }
      }
    }
  }
});

//работа кнопки ок, задача выполнена
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-ready-inner-folder")) {
    const li = event.target.closest("li");
    li.classList.toggle("li-inner-folder-ready");
    li.firstChild.classList.toggle("text-li-inner-folder-ready");

    const setInnerFolder = document.querySelector(".set-folder-do-list");
    const colectionFolders = document.querySelectorAll(".folders-item");
    for (let i of colectionFolders) {
      if (i.classList.contains("border")) {
        const text = i.firstChild.textContent;
        localStorage.removeItem(`arraySetFolder${text}`);
        localStorage.setItem(`arraySetFolder${text}`, setInnerFolder.innerHTML);
      }
    }
  }
});

// работа кнопки del, удалить заметку в папке
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-del-inner-folder")) {
    event.target.closest("li").remove();

    const colectionSet = document.querySelector(".set-folder-do-list");
    const colection = document.querySelectorAll(".folders-item");
    for (let i of colection) {
      if (i.classList.contains("border")) {
        const result = i;
        console.log(result.firstChild.textContent);
        localStorage.removeItem(
          `arraySetFolder${result.firstChild.textContent}`
        );
        localStorage.setItem(
          `arraySetFolder${result.firstChild.textContent}`,
          colectionSet.innerHTML
        );
      }
    }
  }
});

// закрываем содержимое папки и саму папку, место для отоброжения папок очищаем
window.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("div-for-button-close-inner-folder") ||
    event.target.classList.contains("button-close-inner-folder")
  ) {
    event.preventDefault();
    const doList = document.querySelector(".do-list");
    divForImgFolder.append(ImgFolder);
    doList.innerHTML = null;
    doList.append(divForImgFolder);

    const colectionFolder = document.querySelectorAll(".folders-item");
    for (let i of colectionFolder) {
      i.classList.remove("border");
    }
  }
});

let divDateAndEverydayNotes;
let v = false;

// меняем отоброжени приложения (верстку) при определенном размере экрана
const width = window.innerWidth;
if (width <= 1700 && v === false) {
  v = true;
  divDateAndEverydayNotes = document.querySelector(
    ".div-date-and-everyday-notes"
  );
  if (divDateAndEverydayNotes !== null) {
    divDateAndEverydayNotes.remove();
  }
  const zonaCalendar = document.querySelector(".zona-calendar-and-folder");
  zonaCalendar.prepend(divDateAndEverydayNotes);
  changeCalendar();
}

// меняем отоброжени приложения (верстку) при определенном размере экрана
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if (width <= 1700 && v === false) {
    v = true;
    const divDateAndEverydayNotes = document.querySelector(
      ".div-date-and-everyday-notes"
    );
    if (divDateAndEverydayNotes !== null) {
      divDateAndEverydayNotes.remove();
    }
    const zonaCalendar = document.querySelector(".zona-calendar-and-folder");
    zonaCalendar.prepend(divDateAndEverydayNotes);
    if (document.querySelector(".string-to-bottom") !== null) {
      const stringBottom = document.querySelector(".string-to-bottom");
      stringBottom.remove();
    }
    changeCalendar();
    const calendar = document.querySelector(".calendar");
    calendar.style.height = null;
    const header = document.querySelector(".title-and-btn-calendar");
    header.style.justifyContent = "center";
  } else if (width > 1700) {
    v = false;
    const divDateAndEverydayNotes = document.querySelector(
      ".div-date-and-everyday-notes"
    );
    divDateAndEverydayNotes.remove();

    const zonaNotes = document.querySelector(".zona-notes");
    zonaNotes.prepend(divDateAndEverydayNotes);
    createCalendar(".day-of-calendar", year, month);

    const stringLeft = document.querySelector(".calendar-icon-left");
    const stringRight = document.querySelector(".calendar-icon-right");
    stringLeft.style.display = null;
    stringRight.style.display = null;
  }
});

// описываем функцию изменения календаря при изменении ширины экрана
function changeCalendar() {
  // меняем календарь
  // получаем всё необходимое из html документа и создаём недостоющее
  const calendar = document.querySelector(".calendar");
  const dayOfCalendar = document.querySelector(".day-of-calendar");
  const dayOfWeekName = document.querySelector(".days-of-week-set");
  const numberDays = document.querySelectorAll(".number-day");
  const header = document.querySelector(".title-and-btn-calendar");
  const stringLeft = document.querySelector(".calendar-icon-left");
  const stringRight = document.querySelector(".calendar-icon-right");
  const stringDown = document.createElement("div");
  //1.1 меняем шапку
  stringDown.setAttribute("class", "string-to-bottom");
  stringLeft.style.display = "none";
  stringRight.style.display = "none";
  if (header.lastChild.outerHTML !== stringDown.outerHTML) {
    header.append(stringDown);
  }
  stringDown.addEventListener("click", function (e) {
    if (!stringDown.classList.contains("string-to-bottom-click")) {
      header.style.justifyContent = "space-between";
      writeMonthCalendar();
      stringDown.classList.toggle("string-to-bottom-click");
      stringLeft.style.display = null;
      stringRight.style.display = null;
      createCalendar(".day-of-calendar", year, month);
      calendar.style.height = "330px";
      if (localStorage.getItem("colorTheme") === "white") {
        changeColorTheme();
      } else if (localStorage.getItem("colorTheme") === "classic") {
        changeColorThemeClassic();
      }
    } else {
      const date = new Date();
      const titleCalendar = document.querySelector(".title-calendar");
      let month = date.getMonth() + 1;
      if (month == "01") {
        month = "January";
      } else if (month == "02") {
        month = "February";
      } else if (month == "03") {
        month = "March";
      } else if (month == "04") {
        month = "April";
      } else if (month == "05") {
        month = "May";
      } else if (month == "06") {
        month = "June";
      } else if (month == "07") {
        month = "July";
      } else if (month == "08") {
        month = "August";
      } else if (month == "09") {
        month = "September";
      } else if (month == 10) {
        month = "October";
      } else if (month == 11) {
        month = "November";
      } else if (month == 12) {
        month = "December";
      }
      titleCalendar.textContent = `${month} ${date.getFullYear()}`;

      header.style.justifyContent = null;
      calendar.style.height = null;
      stringLeft.style.display = "none";
      stringRight.style.display = "none";
      stringDown.classList.toggle("string-to-bottom-click");
      let thisWeek;
      const dates = new Date();
      for (let i of numberDays) {
        if (i.classList.contains("now-day")) {
          thisWeek = i.closest("ul").outerHTML;
        }
        dayOfCalendar.innerHTML = null;
        dayOfCalendar.innerHTML = thisWeek;
        dayOfCalendar.prepend(dayOfWeekName);
      }
      if (localStorage.getItem("colorTheme") === "white") {
        changeColorTheme();
      } else if (localStorage.getItem("colorTheme") === "classic") {
        changeColorThemeClassic();
      }
      if (dayOfCalendar.lastChild.textContent === "undefined") {
        location.reload();
      }
    }
  });
  //1.2 меняем дни календаря
  let thisWeek;
  const data = new Date();
  for (let i of numberDays) {
    if (i.classList.contains("now-day")) {
      thisWeek = i.closest("ul").outerHTML;
    } else if (i.textContent == data.getDate()) {
      thisWeek = i.closest("ul").outerHTML;
    }
    dayOfCalendar.innerHTML = null;
    dayOfCalendar.innerHTML = thisWeek;
    dayOfCalendar.prepend(dayOfWeekName);
  }
}
