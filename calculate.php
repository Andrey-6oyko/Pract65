<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number1 = $_POST['number1'];
    $number2 = $_POST['number2'];
    $sum = $number1 + $number2;

    echo "Сума: " . $sum;
}
?>
