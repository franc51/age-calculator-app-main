const day_input = document.getElementById('day_input');
const day_label = document.getElementById('day_label');

const month_input = document.getElementById('month_input');
const month_label = document.getElementById('month_label');

const year_input = document.getElementById('year_input');
const year_label = document.getElementById('year_label');

const submit_button = document.getElementById('submit_button');

const error_day = document.getElementById('age__error_day');
const error_month = document.getElementById('age__error_month');
const erorr_year = document.getElementById('age__error_year');
const erorr_date = document.getElementById('age__error_date');

submit_button.addEventListener('click', () => {
    const day = parseInt(day_input.value, 10);
    if(day > 0 && day <= 31) {
        age__error__day.style.display = 'none';
        day_input.style.boxShadow = '0 0 4px green';
        day_label.style.color = 'green';
       
    }
    else {
        age__error__day.style.display = 'block';
        day_input.style.boxShadow = '0 0 4px red';
        day_label.style.color = 'red';
    }
})

submit_button.addEventListener('click', () => {
    const month = parseInt(month_input.value, 10);
    if(month > 0 && month <= 12) {
        age__error__month.style.display = 'none';
        month_input.style.boxShadow = '0 0 4px green';
        month_label.style.color = 'green';
    }
    else {
        age__error__month.style.display = 'block';
        month_input.style.boxShadow = '0 0 4px red';
        month_label.style.color = 'red';
    }
})

submit_button.addEventListener('click', () => {
    const year = parseInt(year_input.value, 10);
    if(year > 0 && year <= 2024) {
        age__error__year.style.display = 'none';
        year_input.style.boxShadow = '0 0 4px green';
        year_label.style.color = 'green';
    }
    else {
        age__error__year.style.display = 'block';
        year_input.style.boxShadow = '0 0 4px red';
        year_label.style.color = 'red';
    }
})

submit_button.addEventListener('click', () => {
      month = parseInt(month_input.value, 10);
      day = parseInt(day_input.value, 10);
    if(month = 2 && day > 28) {
        erorr_date.style.display = 'block';
        day_input.style.boxShadow = '0 0 4px red';
        month_input.style.boxShadow = '0 0 4px red';
        year_input.style.boxShadow = '0 0 4px red';
    }
    else {
        erorr_date.style.display = 'none';
        day_input.style.boxShadow = '0 0 4px green';
        month_input.style.boxShadow = '0 0 4px green';
        year_input.style.boxShadow = '0 0 4px green';
    }
})