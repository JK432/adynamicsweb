let currentDate = new Date();
let selectedDate = null;

function generateCalendar(date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const startingDayIndex = firstDay.getDay();
  const monthLength = lastDay.getDate();

  // Update month display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("monthDisplay").textContent = `${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;

  // Clear existing calendar
  const calendarGrid = document.getElementById("calendarGrid");
  calendarGrid.innerHTML = "";

  // Add day headers
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dayNames.forEach((day) => {
    const dayHeader = document.createElement("div");
    dayHeader.className = "calendar-day-header";
    dayHeader.textContent = day;
    calendarGrid.appendChild(dayHeader);
  });

  // Add blank spaces for days before the first of the month
  for (let i = 0; i < startingDayIndex; i++) {
    const blankDay = document.createElement("div");
    blankDay.className = "calendar-day other-month";
    const prevMonthLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    blankDay.textContent = prevMonthLastDay - startingDayIndex + i + 1;
    calendarGrid.appendChild(blankDay);
  }

  // Add days of the month
  for (let day = 1; day <= monthLength; day++) {
    const dayElement = document.createElement("div");
    dayElement.className = "calendar-day";
    dayElement.textContent = day;

    // Check if this is today
    const today = new Date();
    if (
      day === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    // Check if this is the selected date
    if (
      selectedDate &&
      day === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    ) {
      dayElement.classList.add("selected");
    }

    dayElement.addEventListener("click", () => {
      const newDate = new Date(date.getFullYear(), date.getMonth(), day);
      selectDate(newDate);
    });

    calendarGrid.appendChild(dayElement);
  }

  // Add blank spaces for days after the last of the month
  const totalCells = 42; // 6 rows × 7 days
  const remainingCells = totalCells - (monthLength + startingDayIndex);
  for (let i = 1; i <= remainingCells; i++) {
    const blankDay = document.createElement("div");
    blankDay.className = "calendar-day other-month";
    blankDay.textContent = i;
    calendarGrid.appendChild(blankDay);
  }
}

function selectDate(date) {
  selectedDate = date;
  document.querySelectorAll(".calendar-day.selected").forEach((el) => {
    el.classList.remove("selected");
  });
  generateCalendar(currentDate);

  // Update selected date display
  // document.getElementById('selectedDateDisplay').textContent =
  //     `Selected: ${date.toLocaleDateString()}`;

  // You can access the selected date from the selectedDate variable
  console.log("Selected date:", selectedDate);
  console.log("Selected date:", selectedDate.toLocaleDateString());
}

// Initialize calendar
generateCalendar(currentDate);

// Add event listeners for month navigation
document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
  generateCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
  generateCalendar(currentDate);
});
