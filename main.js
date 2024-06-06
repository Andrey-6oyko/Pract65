function calculateSum(event) {
    event.preventDefault(); // Запобігає відправленню форми
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const sum = number1 + number2;

    alert('Сума: ' + sum); // Виведення результату в діалоговому вікні
    document.getElementById('result').value = sum; // Виведення результату в окремому полі форми
}