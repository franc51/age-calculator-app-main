const day_input = document.getElementById('day_input');

const submit_button = document.getElementById('submit_button');

submit_button.addEventListener('click', () => {
    const day = parseInt(day_input.value, 10);
    if(day > 0 && day <= 31) {
        console.log('Day is', day);
    }
    else {
        console.log('Please enter a valid day(1-31).');
    }
})