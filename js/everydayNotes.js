let modalWindow;
let valueModalWindow = false;
const valueEverydayNotes = localStorage.getItem("everyday-notes");
if (valueEverydayNotes !== null) {
  const everydayNotesSet = document.querySelector(".everyday-notes-set");
  everydayNotesSet.insertAdjacentHTML("beforeend", valueEverydayNotes);
  if (everydayNotesSet.innerHTML !== null) {
    // localStorage.removeItem("everyday-notes");
    localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
  }
}

// Создаём модальное окно по нажатию кнопки
window.addEventListener("click", function (event) {
  const targetCore = event.target;
  if (
    (event.target.classList.contains("btn-create-new-everyday-note") &&
      valueModalWindow === false) ||
    (event.target.classList.contains("timeline-item") &&
      valueModalWindow === false &&
      !event.target.classList.contains("timeline-background-color-4")) ||
    (event.target.classList.contains("time-of-timeline") &&
      valueModalWindow === false &&
      !event.target
        .closest("li")
        .classList.contains("timeline-background-color-4")) ||
    (event.target.classList.contains("everyday-notes-item") &&
      valueModalWindow === false &&
      !event.target.classList.contains("click-on-btn-ok-li")) ||
    (event.target.classList.contains("everyday-note-text") &&
      valueModalWindow === false &&
      !event.target.closest("li").classList.contains("click-on-btn-ok-li"))
  ) {
    modalWindow = document.createElement("div");
    modalWindow.setAttribute("class", "modal-window");
    const closeBtn = document.createElement("div");
    closeBtn.setAttribute("class", "close-btn");
    const btnCloseModalWindow = document.createElement("button");
    btnCloseModalWindow.setAttribute("class", "btn-close-maodal-window");
    const closes = document.createElement("div");
    closes.setAttribute("class", "close");
    btnCloseModalWindow.append(closes);
    closeBtn.append(btnCloseModalWindow);
    const divTitleModalWindow = document.createElement("div");
    divTitleModalWindow.setAttribute("class", "div-title-modal-window");
    const titleModalWindow = document.createElement("h2");
    titleModalWindow.setAttribute("class", "title-modal-window");
    titleModalWindow.textContent = "What's new ?";
    if (
      event.target.classList.contains("everyday-notes-item") ||
      event.target.classList.contains("everyday-note-text")
    ) {
      titleModalWindow.textContent = "Something has changed?";
    }
    divTitleModalWindow.append(titleModalWindow);
    const divLogicModalWindow = document.createElement("div");
    divLogicModalWindow.setAttribute("class", "div-logic-modal-window");
    const formModalWindow = document.createElement("form");
    formModalWindow.setAttribute("class", "form-modal-window");
    const inputModalWindow = document.createElement("input");
    inputModalWindow.setAttribute("placeholder", "What on your mind ?");
    inputModalWindow.setAttribute("type", "text");
    inputModalWindow.setAttribute("class", "input-modal-window");
    if (event.target.classList.contains("everyday-notes-item")) {
      inputModalWindow.value = event.target.firstChild.textContent;
    } else if (event.target.classList.contains("everyday-note-text")) {
      inputModalWindow.value = event.target.textContent;
    }
    formModalWindow.append(inputModalWindow);
    const divForChooseTimeAndChooseColor = document.createElement("div");
    divForChooseTimeAndChooseColor.setAttribute(
      "class",
      "div-for-color-and-time"
    );

    // кнопка добавить в модальном окне
    const btnAddModalWindow = document.createElement("input");
    btnAddModalWindow.setAttribute("type", "submit");
    btnAddModalWindow.setAttribute(
      "class",
      "btn-everyday btn-add-madal-window"
    );
    btnAddModalWindow.value = "Add";
    formModalWindow.append(btnAddModalWindow);

    // создаём в модальном окне список выбора времени для заметки
    const chooseTime = document.createElement("div");
    chooseTime.setAttribute("class", "choose-time");
    const divInnerChooseTime = document.createElement("div");
    divInnerChooseTime.setAttribute("class", "div-inner-choose-time");
    if (event.target.classList.contains("btn-create-new-everyday-note")) {
      divInnerChooseTime.textContent = "00:00";
    } else if (event.target.classList.contains("everyday-notes-item")) {
      divInnerChooseTime.textContent = event.target.childNodes[1].textContent;
    } else if (event.target.classList.contains("everyday-note-text")) {
      divInnerChooseTime.textContent =
        event.target.closest("li").childNodes[1].textContent;
    } else {
      divInnerChooseTime.textContent = event.target.textContent;
    }
    const iconForChooseTime = document.createElement("div");
    iconForChooseTime.setAttribute("class", "icon-for-shosee-time");
    divInnerChooseTime.append(iconForChooseTime);
    chooseTime.append(divInnerChooseTime);
    let valueChooseTime = false;
    window.addEventListener("click", function (event) {
      if (
        (event.target.classList.contains("choose-time") &&
          valueChooseTime === false) ||
        (event.target.classList.contains("icon-for-shosee-time") &&
          valueChooseTime === false) ||
        (event.target.classList.contains("div-inner-choose-time") &&
          valueChooseTime === false)
      ) {
        const setTime = this.document.createElement("ul");
        setTime.setAttribute("class", "set-time");
        const time1 = document.createElement("li");
        time1.setAttribute("class", "item-time");
        time1.textContent = "00:00";
        const time2 = document.createElement("li");
        time2.setAttribute("class", "item-time");
        time2.textContent = "01:00";
        const time3 = document.createElement("li");
        time3.setAttribute("class", "item-time");
        time3.textContent = "02:00";
        const time4 = document.createElement("li");
        time4.setAttribute("class", "item-time");
        time4.textContent = "03:00";
        const time5 = document.createElement("li");
        time5.setAttribute("class", "item-time");
        time5.textContent = "04:00";
        const time6 = document.createElement("li");
        time6.setAttribute("class", "item-time");
        time6.textContent = "05:00";
        const time7 = document.createElement("li");
        time7.setAttribute("class", "item-time");
        time7.textContent = "06:00";
        const time8 = document.createElement("li");
        time8.setAttribute("class", "item-time");
        time8.textContent = "07:00";
        const time9 = document.createElement("li");
        time9.setAttribute("class", "item-time");
        time9.textContent = "08:00";
        const time10 = document.createElement("li");
        time10.setAttribute("class", "item-time");
        time10.textContent = "09:00";
        const time11 = document.createElement("li");
        time11.setAttribute("class", "item-time");
        time11.textContent = "10:00";
        const time12 = document.createElement("li");
        time12.setAttribute("class", "item-time");
        time12.textContent = "11:00";
        const time13 = document.createElement("li");
        time13.setAttribute("class", "item-time");
        time13.textContent = "12:00";
        const time14 = document.createElement("li");
        time14.setAttribute("class", "item-time");
        time14.textContent = "13:00";
        const time15 = document.createElement("li");
        time15.setAttribute("class", "item-time");
        time15.textContent = "14:00";
        const time16 = document.createElement("li");
        time16.setAttribute("class", "item-time");
        time16.textContent = "15:00";
        const time17 = document.createElement("li");
        time17.setAttribute("class", "item-time");
        time17.textContent = "16:00";
        const time18 = document.createElement("li");
        time18.setAttribute("class", "item-time");
        time18.textContent = "17:00";
        const time19 = document.createElement("li");
        time19.setAttribute("class", "item-time");
        time19.textContent = "18:00";
        const time20 = document.createElement("li");
        time20.setAttribute("class", "item-time");
        time20.textContent = "19:00";
        const time21 = document.createElement("li");
        time21.setAttribute("class", "item-time");
        time21.textContent = "20:00";
        const time22 = document.createElement("li");
        time22.setAttribute("class", "item-time");
        time22.textContent = "21:00";
        const time23 = document.createElement("li");
        time23.setAttribute("class", "item-time");
        time23.textContent = "22:00";
        const time24 = document.createElement("li");
        time24.setAttribute("class", "item-time");
        time24.textContent = "23:00";
        const time25 = document.createElement("li");
        time25.setAttribute("class", "item-time");
        time25.textContent = "23:59";

        setTime.append(
          time1,
          time2,
          time3,
          time4,
          time5,
          time6,
          time7,
          time8,
          time9,
          time10,
          time11,
          time12,
          time13,
          time14,
          time15,
          time16,
          time17,
          time18,
          time19,
          time20,
          time21,
          time22,
          time23,
          time24,
          time25
        );
        chooseTime.append(setTime);
        if (localStorage.getItem("colorTheme") === "white") {
          changeColorTheme();
        } else if (localStorage.getItem("colorTheme") === "classic") {
          changeColorThemeClassic();
        }
        valueChooseTime = true;
        window.addEventListener("click", function (event) {
          if (event.target.classList.contains("item-time")) {
            divInnerChooseTime.textContent = event.target.textContent;
            divInnerChooseTime.append(iconForChooseTime);
            setTime.remove();
            valueChooseTime = false;
            inputModalWindow.focus();
          } else if (event.target.classList.contains("set-time")) {
            return;
          } else if (!event.target.classList.contains("date")) {
            setTime.remove();
            valueChooseTime = false;
            inputModalWindow.focus();
          }
        });
      } else {
        return;
      }
    });

    // делаем список в модальном окне для выбора цвета в таймлайн
    const chooseColorOfNote = document.createElement("div");
    chooseColorOfNote.setAttribute("class", "choose-color-of-note");
    const divForColorAndIcon = document.createElement("div");
    divForColorAndIcon.setAttribute("class", "div-for-color-and-icon");
    const colorInnerDiv = document.createElement("div");
    colorInnerDiv.setAttribute("class", "color-inner-div");
    colorInnerDiv.style.backgroundColor = "white";

    if (event.target.classList.contains("everyday-notes-item")) {
      if (
        event.target.childNodes[1].classList.contains(
          "timeline-background-color-1"
        )
      ) {
        colorInnerDiv.style.backgroundColor = "rgba(153, 0, 102, 0.7)";
      } else if (
        event.target.childNodes[1].classList.contains(
          "timeline-background-color-2"
        )
      ) {
        colorInnerDiv.style.backgroundColor = "white";
      } else if (
        event.target.childNodes[1].classList.contains(
          "timeline-background-color-3"
        )
      ) {
        colorInnerDiv.style.backgroundColor = "rgb(193, 164, 96)";
      }
    } else if (event.target.classList.contains("everyday-note-text")) {
      if (
        event.target
          .closest("li")
          .childNodes[1].classList.contains("timeline-background-color-1")
      ) {
        colorInnerDiv.style.backgroundColor = "rgba(153, 0, 102, 0.7)";
      } else if (
        event.target
          .closest("li")
          .childNodes[1].classList.contains("timeline-background-color-2")
      ) {
        colorInnerDiv.style.backgroundColor = "white";
      } else if (
        event.target
          .closest("li")
          .childNodes[1].classList.contains("timeline-background-color-3")
      ) {
        colorInnerDiv.style.backgroundColor = "rgb(193, 164, 96)";
      }
    }
    const iconForColorChoose = document.createElement("div");
    iconForColorChoose.setAttribute("class", "icon-for-color-choose");
    divForColorAndIcon.append(colorInnerDiv, iconForColorChoose);
    chooseColorOfNote.append(divForColorAndIcon);
    let valueChooseColor = false;
    window.addEventListener("click", function (event) {
      if (
        (event.target.classList.contains("choose-color-of-note") &&
          valueChooseColor === false) ||
        (event.target.classList.contains("div-for-color-and-icon") &&
          valueChooseColor === false) ||
        (event.target.classList.contains("color-inner-div") &&
          valueChooseColor === false) ||
        (event.target.classList.contains("icon-for-color-choose") &&
          valueChooseColor === false)
      ) {
        const chooseColorSet = document.createElement("ul");
        chooseColorSet.setAttribute("class", "color-set");

        const chooseColorItem1 = document.createElement("li");
        chooseColorItem1.setAttribute("class", "color-item");
        const colorWhite = document.createElement("div");
        colorWhite.setAttribute("class", "color-white-item");
        chooseColorItem1.append(colorWhite);
        const chooseColorItem2 = document.createElement("li");
        chooseColorItem2.setAttribute("class", "color-item");
        const colorPurple = document.createElement("div");
        colorPurple.setAttribute("class", "color-purple-item");
        chooseColorItem2.append(colorPurple);
        const chooseColorItem3 = document.createElement("li");
        chooseColorItem3.setAttribute("class", "color-item");
        const colorBeige = document.createElement("div");
        colorBeige.setAttribute("class", "color-beige-item");
        chooseColorItem3.append(colorBeige);
        chooseColorSet.append(
          chooseColorItem1,
          chooseColorItem2,
          chooseColorItem3
        );

        chooseColorOfNote.append(chooseColorSet);
        if (localStorage.getItem("colorTheme") === "white") {
          changeColorTheme();
        } else if (localStorage.getItem("colorTheme") === "classic") {
          changeColorThemeClassic();
        }
        valueChooseColor = true;

        window.addEventListener("click", function (event) {
          if (event.target.classList.contains("color-beige-item")) {
            colorInnerDiv.style.backgroundColor = "rgb(193, 164, 96)";
            chooseColorSet.remove();
            valueChooseColor = false;
          } else if (event.target.classList.contains("color-purple-item")) {
            colorInnerDiv.style.backgroundColor = "rgba(153, 0, 102, 0.7)";
            chooseColorSet.remove();
            valueChooseColor = false;
          } else if (event.target.classList.contains("color-white-item")) {
            colorInnerDiv.style.backgroundColor = "white";
            chooseColorSet.remove();
            valueChooseColor = false;
          } else if (
            event.target.classList.contains("color-item") ||
            event.target.classList.contains("color-set")
          ) {
            return;
          } else if (!event.target.classList.contains("date")) {
            chooseColorSet.remove();
            valueChooseColor = false;
          }
        });
      }
    });

    // собираем все компоненты модального окна
    divForChooseTimeAndChooseColor.append(chooseTime, chooseColorOfNote);
    divLogicModalWindow.append(formModalWindow, divForChooseTimeAndChooseColor);
    modalWindow.append(closeBtn, divTitleModalWindow, divLogicModalWindow);
    this.document.body.append(modalWindow);
    if (localStorage.getItem("colorTheme") === "white") {
      changeColorTheme();
    } else if (localStorage.getItem("colorTheme") === "classic") {
      changeColorThemeClassic();
    }
    valueModalWindow = true;

    // создаём <li> тег для заметки
    const everydayNotesItem = document.createElement("li");
    everydayNotesItem.setAttribute("class", "everyday-notes-item");
    const everydayNotesText = document.createElement("p");
    everydayNotesText.setAttribute("class", "everyday-note-text");
    const everydayNotesBtnOk = document.createElement("button");
    everydayNotesBtnOk.setAttribute("class", "everyday-notes-btn-ok");
    everydayNotesBtnOk.textContent = "Ok";
    const everydayNotesBtnDel = document.createElement("button");
    everydayNotesBtnDel.setAttribute("class", "everyday-notes-btn-del");
    everydayNotesBtnDel.textContent = "Del";
    const everydayNotesTime = document.createElement("p");
    everydayNotesTime.setAttribute("class", "everyday-notes-time");

    everydayNotesItem.append(
      everydayNotesText,
      everydayNotesTime,
      everydayNotesBtnOk,
      everydayNotesBtnDel
    );

    // кнопка крестик модального окна
    window.addEventListener("click", function (event) {
      if (
        (event.target.classList.contains("btn-close-maodal-window") &&
          valueModalWindow === true) ||
        (event.target.classList.contains("close") && valueModalWindow === true)
      ) {
        modalWindow.remove();
        valueModalWindow = false;
        modalWindow.innerHTML = null;
        everydayNotesItem.closest("*").remove();
        everydayNotesItem.innerHTML = null;
      } else {
        return;
      }
    });

    // помещаем в тег <li> заметку и добавляем её на главную страницу
    formModalWindow.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.classList.contains("btn-add-madal-window")) {
        if (inputModalWindow.value != "") {
          if (targetCore.classList.contains("everyday-notes-item")) {
            targetCore.remove();
            localStorage.removeItem("everyday-notes");
            const everydayNotesSet = document.querySelector(
              ".everyday-notes-set"
            );
            localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
          } else if (targetCore.classList.contains("everyday-note-text")) {
            targetCore.closest("li").remove();
            localStorage.removeItem("everyday-notes");
            const everydayNotesSet = document.querySelector(
              ".everyday-notes-set"
            );
            localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
          }

          const everydayNotesSet = document.querySelector(
            ".everyday-notes-set"
          );
          everydayNotesText.textContent = inputModalWindow.value;
          if (
            colorInnerDiv.style.backgroundColor === "rgba(153, 0, 102, 0.7)"
          ) {
            everydayNotesTime.classList.add("timeline-background-color-1");
          } else if (colorInnerDiv.style.backgroundColor === "white") {
            everydayNotesTime.classList.add("timeline-background-color-2");
          } else if (
            colorInnerDiv.style.backgroundColor === "rgb(193, 164, 96)"
          ) {
            everydayNotesTime.classList.add("timeline-background-color-3");
          }
          everydayNotesTime.textContent = divInnerChooseTime.textContent;
          everydayNotesSet.append(everydayNotesItem);

          if (localStorage.getItem("colorTheme") === "white") {
            changeColorTheme();
          } else if (localStorage.getItem("colorTheme") === "classic") {
            changeColorThemeClassic();
          }

          modalWindow.remove();
          valueModalWindow = false;
          inputModalWindow.value = "";
          localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
          paintTimeline();
        }
      } else {
        return;
      }
    });
  } else {
    return;
  }
});

//Кнопки удалить, удалить всё, вернуть последнее
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("everyday-notes-btn-del")) {
    localStorage.removeItem("last-del");
    if (event.target.closest("li").classList.contains("click-on-btn-ok-li")) {
      localStorage.setItem(
        "last-del",
        `<li class="everyday-notes-item click-on-btn-ok-li">${
          event.target.closest("li").innerHTML
        }</li>`
      );
    } else {
      localStorage.setItem("last-del", event.target.closest("li").outerHTML);
    }
    event.target.closest("li").remove();
    const everydayNotesSet = document.querySelector(".everyday-notes-set");
    localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
    paintTimeline();
  }
});

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-back-everyday-note")) {
    const lastDel = localStorage.getItem("last-del");
    if (lastDel != null) {
      const everydayNotesSet = document.querySelector(".everyday-notes-set");
      everydayNotesSet.insertAdjacentHTML("beforeend", lastDel);
      localStorage.removeItem("last-del");
      localStorage.removeItem("everyday-notes");
      localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
      if (localStorage.getItem("colorTheme") === "white") {
        changeColorTheme();
      } else if (localStorage.getItem("colorTheme") === "classic") {
        changeColorThemeClassic();
      }

      paintTimeline();
    }
  }
});

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-delete-all-everyday-notes")) {
    localStorage.removeItem("last-del");
    const everydayNotesSet = document.querySelector(".everyday-notes-set");
    const saveForBtnBack = everydayNotesSet.innerHTML;
    localStorage.setItem("last-del", saveForBtnBack);
    localStorage.removeItem("everyday-notes");
    everydayNotesSet.innerHTML = null;
    localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
    paintTimeline();
  }
});

// кнопочка "Ок" готовность задачи
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("everyday-notes-btn-ok")) {
    localStorage.removeItem("everyday-notes");
    event.target.classList.toggle("click-on-btn-ok");
    event.target.closest("li").classList.toggle("click-on-btn-ok-li");
    event.target.closest("li").classList.toggle("hover");
    event.target.closest("li").firstChild.classList.toggle("click-on-btn-ok-p");
    event.target
      .closest("li")
      .childNodes[1].classList.toggle("timeline-background-color-4");
    const everydayNotesSet = document.querySelector(".everyday-notes-set");
    localStorage.setItem("everyday-notes", everydayNotesSet.innerHTML);
    paintTimeline();
  }
});

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("icon-string-down")) {
    const divWithEverydayNotes = document.querySelector(
      ".div-date-and-everyday-notes"
    );
    const setForEverydayNotes = document.querySelector(".everyday-notes-set");
    const iconAbsolute = document.querySelector(".icon-string-down");

    divWithEverydayNotes.classList.toggle(
      "div-date-and-everyday-notes-absolute"
    );
    setForEverydayNotes.classList.toggle("everyday-notes-set-absolute");
    iconAbsolute.classList.toggle("icon-string-down-absolute");

    const doList = document.querySelector(".do-list");
    doList.classList.toggle("none");

    const calendar = document.querySelector(".calendar");
    calendar.classList.toggle("none");
  }
});
