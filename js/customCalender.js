document.addEventListener("DOMContentLoaded", () => {

    let demoMonth
    let demoDay
    let demoYear
    let demoDayNumber
    let localDate



        // date getting functionality========================================================

        const monthDisplay = document.querySelectorAll(".demo-month");
        const dayDisplay = document.querySelectorAll(".demo-day");
        const yearDisplay = document.querySelectorAll(".demo-year");
        const weekDisplay = document.querySelectorAll(".demo-week");
    
        const getDemoDate = () => {

            monthDisplay.forEach((month) => {
                month.textContent = demoMonth;
            })
            dayDisplay.forEach((day) => {
                day.textContent = demoDayNumber;
            })
            yearDisplay.forEach((year) => {
                year.textContent = demoYear;
            })
            weekDisplay.forEach((week) => {
                week.textContent = demoDay;
            })
        }


        // ==================================================================================



    // calender functionality =======================================================================

    let currentDate = new Date();
    let selectedDate = null;
    
    function generateCalendar(date) {
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const startingDayIndex = firstDay.getDay();
      const monthLength = lastDay.getDate();
    
      // Updating month display
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
    
      // Clearing existing calendar
      const calendarGrid = document.getElementById("calendarGrid");
      calendarGrid.innerHTML = "";
    
      // Adding day headers
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      dayNames.forEach((day) => {
        const dayHeader = document.createElement("div");
        dayHeader.className = "calendar-day-header";
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
      });
    
      // Adding blank spaces for days before the first of the month
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
    
      // Adding days of the month
      for (let day = 1; day <= monthLength; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "calendar-day";
        dayElement.textContent = day;

         // Create a date object for this day to check its day of week
    const thisDate = new Date(date.getFullYear(), date.getMonth(), day);
    const dayOfWeek = thisDate.getDay();



    // If it's not Sunday (0) or Wednesday (3), adding a disabled style
    if (dayOfWeek !== 0 && dayOfWeek !== 3) {
      dayElement.style.color = "#ccc";
      dayElement.style.cursor = "not-allowed";
  }


    
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
        // Only allow selection if it's Wednesday or Sunday
        if (newDate.getDay() === 0 || newDate.getDay() === 3) {
            selectDate(newDate);
        }
    });
    
        calendarGrid.appendChild(dayElement);
      }
    
      // Add blank spaces for days after the last of the month
      const totalCells = 42; 
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


      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                     'August', 'September', 'October', 'November', 'December'];
      
      demoDay = days[date.getDay()];
      demoMonth = months[date.getMonth()];
      demoDayNumber = date.getDate();
      demoYear = date.getFullYear();
  
      console.log('Day:', demoDay);
      console.log('Month:', demoMonth);
      console.log('Date:', demoDayNumber);
      console.log('Year:', demoYear);
    
      // access the selected date from the selectedDate variable
      console.log("Selected date:", selectedDate);
      console.log("Selected date:", selectedDate.toLocaleDateString());
      const localSelectedDate = selectedDate.toLocaleDateString();
      localDate = localSelectedDate
      // const bookedDate = document.querySelector("#user-date");
      // bookedDate.textContent = localSelectedDate;

      getDemoDate()
    }
    
    // Initialize calendar
    generateCalendar(currentDate);
    
    
    document.getElementById("prevMonth").addEventListener("click", () => {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
      generateCalendar(currentDate);
    });
    
    document.getElementById("nextMonth").addEventListener("click", () => {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
      generateCalendar(currentDate);
    });

    //===================================================================================


      // handle form data to google sheets



})

