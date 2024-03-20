document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    let string = '';

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            let buttonValue = e.target.textContent.trim();

            if (buttonValue === '=') {
                string = eval(string);
                input.value = string;
            } else if (buttonValue === 'AC') {
                input.value = '';
                string = '';
            } else if (buttonValue === 'DE') {
                // Remove the last character from the string
                string = string.slice(0, -1);
                input.value = string;
            } else {
                string = string + buttonValue;
                input.value = string;
            }
        });
    });
});


