let x = Number(prompt("Введите X= ")); // prompt -Вывод сообщение в алерте (стринги)
let y = Number(prompt("Введите Y= ")); // number - Конвертирует стринги в число, если они на них похожи

if (!isNaN(x) && !isNaN(y)) { //  ЕСЛИ (НЕ ЧИСЛО (Х) И НЕ ЧИСЛО (Y))
    let o = prompt("Введите операцию");
    switch (o) { // Переключатель по переменной о
        case "+": // Ячейка
            alert(`${x}+${y}= ${x+y}`);
            break;

        case "-":
            alert(`${x}-${y}= ${x-y}`);
            break;

        case "*":
            alert(`${x}*${y}= ${x*y}`);
            break;

        case "/":
            let num0 = (x / y);
            break;
        case "**":
            alert(`${x}**${y}= ${x**y}`);
            break;
        case "%":
            alert(`${x}%${y}= ${x%y}`);
            break;
        default:
            alert("Это не операция");
            if (!isNaN(num0)) {
                alert("нельзя делить на 0")
            } else {
                alert(`${x}/${y}= ${x/y}`);
            }
    }


}