function paintTimeline() {
  const timeOfTimeline = document.querySelectorAll(".time-of-timeline");
  const everydayNotesTime = document.querySelectorAll(".everyday-notes-time");
  const noteOfTimeline = document.querySelectorAll(".note-of-timeline");

  timeOfTimeline.forEach(function (item) {
    item.closest("li").classList.remove("timeline-background-color-1");
    item.closest("li").classList.remove("timeline-background-color-2");
    item.closest("li").classList.remove("timeline-background-color-3");
    item.closest("li").classList.remove("timeline-background-color-4");
  });

  timeOfTimeline.forEach(function (item) {
    everydayNotesTime.forEach(function (data) {
      if (
        item.textContent.trim() == data.textContent.trim() &&
        data.classList.contains("timeline-background-color-4")
      ) {
        item.closest("li").classList.add("timeline-background-color-4");
      } else if (
        item.textContent.trim() == data.textContent.trim() &&
        data.classList.contains("timeline-background-color-1")
      ) {
        item.closest("li").classList.add("timeline-background-color-1");
      } else if (
        item.textContent.trim() == data.textContent.trim() &&
        data.classList.contains("timeline-background-color-2")
      ) {
        item.closest("li").classList.add("timeline-background-color-2");
      } else if (
        item.textContent.trim() == data.textContent.trim() &&
        data.classList.contains("timeline-background-color-3")
      ) {
        item.closest("li").classList.add("timeline-background-color-3");
      }
    });
  });
}

paintTimeline();
