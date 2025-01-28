const day_input = document.getElementById('day_input');
const day_label = document.getElementById('day_label');

const submit_button = document.getElementById('submit_button');

const error_message = document.getElementById('age__error_state')

submit_button.addEventListener('click', () => {
    const day = parseInt(day_input.value, 10);
    if(day > 0 && day <= 31) {
        age__error_state.style.display = 'none';
        day_input.style.boxShadow = '0 0 4px green';
        day_label.style.color = 'green';
       
    }
    else {
        age__error_state.style.display = 'block';
        day_input.style.boxShadow = '0 0 4px red';
        day_label.style.color = 'red';
    }
})