function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;

    } else {
        return getPin();
    }
}

/* called when the generate pin button us called */
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

/* keypad */
// event delegate or bubble is used
document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const typedNumbersInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumbersInput.value = ''
        }
    } else {
        const previousNumber = typedNumbersInput.value;
        const newNumber = previousNumber + number;
        typedNumbersInput.value = newNumber
    }
})

/* Submit button */
document.getElementById('submit-button').addEventListener('click', function() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failedNotification = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successNotification.style.display = 'block'
        failedNotification.style.display = 'none'
    } else {
        failedNotification.style.display = 'block'
        successNotification.style.display = 'none'
    }
})