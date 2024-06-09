function calculateSum() {
    // Отримання значень чисел з полів введення
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Перевірка, чи введені числа є валідними
    if (!isNaN(number1) && !isNaN(number2)) {
        // Обчислення суми
        const sum = number1 + number2;

        // Виведення результату в діалоговому вікні
        alert(`Сума: ${sum}`);

        // Відображення результату в окремому полі на сторінці
        document.getElementById('result').innerText = `Сума: ${sum}`;
    } else {
        alert('Будь ласка, введіть валідні числа.');
    }
}