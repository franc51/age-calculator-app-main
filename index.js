document.addEventListener("DOMContentLoaded", () => {
  const day_input = document.getElementById("day_input");
  const day_label = document.getElementById("day_label");

  const month_input = document.getElementById("month_input");
  const month_label = document.getElementById("month_label");

  const year_input = document.getElementById("year_input");
  const year_label = document.getElementById("year_label");

  const submit_button = document.getElementById("submit_button");

  const error_day = document.getElementById("age__error__day");
  const month_error = document.getElementById("month_error");
  const error_year = document.getElementById("age__error__year");
  const error_date = document.getElementById("age__error_date");

  const day_result = document.getElementById("span__day");
  const month_result = document.getElementById("span__month");
  const year_result = document.getElementById("span__year");

  function animateNumber(element, start, end, duration) {
    let startTime;

    function updateNumber(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        element.innerHTML = Math.floor(start + (end - start) * progress);
        requestAnimationFrame(updateNumber);
      } else {
        element.innerHTML = end;
      }
    }

    requestAnimationFrame(updateNumber);
  }

  submit_button.addEventListener("click", () => {
    let validation_error = false;

    const day = parseInt(day_input.value, 10);
    const month = parseInt(month_input.value, 10);
    const year = parseInt(year_input.value, 10);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    function resetStyles(input, label) {
      input.style.boxShadow = "";
      label.style.color = "";
    }

    resetStyles(day_input, day_label);
    resetStyles(month_input, month_label);
    resetStyles(year_input, year_label);

    if (day > 0 && day <= 31) {
      error_day.style.display = "none";
    } else {
      error_day.style.display = "block";
      day_input.style.boxShadow = "0 0 4px red";
      day_label.style.color = "red";
      validation_error = true;
    }

    if (month > 0 && month <= 12) {
      month_error.style.display = "none";
    } else {
      month_error.style.display = "block";
      month_input.style.boxShadow = "0 0 4px red";
      month_label.style.color = "red";
      validation_error = true;
    }

    if (year > 0 && year <= currentYear) {
      error_year.style.display = "none";
    } else {
      error_year.style.display = "block";
      year_input.style.boxShadow = "0 0 4px red";
      year_label.style.color = "red";
      validation_error = true;
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (
      (month === 2 &&
        ((isLeapYear && day > 29) || (!isLeapYear && day > 28))) ||
      ([4, 6, 9, 11].includes(month) && day > 30)
    ) {
      error_date.style.display = "block";
      day_input.style.boxShadow = "0 0 4px red";
      month_input.style.boxShadow = "0 0 4px red";
      year_input.style.boxShadow = "0 0 4px red";
      day_label.style.color = "red";
      month_label.style.color = "red";
      year_label.style.color = "red";
      validation_error = true;
    } else {
      error_date.style.display = "none";
    }

    if (!validation_error) {
      let input_date = new Date(year, month - 1, day);

      let ageYear = currentYear - input_date.getFullYear();
      let ageMonth = currentMonth - input_date.getMonth();
      let ageDay = currentDay - input_date.getDate();

      if (ageDay < 0) {
        ageDay += new Date(currentYear, currentMonth, 0).getDate();
        ageMonth--;
      }

      if (ageMonth < 0) {
        ageMonth += 12;
        ageYear--;
      }

      animateNumber(year_result, 0, ageYear, 1000);
      animateNumber(month_result, 0, ageMonth, 1000);
      animateNumber(day_result, 0, ageDay, 1000);
    }
  });
});
