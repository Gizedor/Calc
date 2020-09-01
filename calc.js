let x = Number(prompt("Введите X= ")); // prompt -Вывод сообщение в алерте (стринги)
let y = Number(prompt("Введите Y= ")); // number - Конвертирует стринги в число, если они на них похожи

if (!isNaN(x) && !isNaN(y)) { //  ЕСЛИ (НЕ ЧИСЛО (Х) И НЕ ЧИСЛО (Y))
    let o = prompt("Введите операцию");
    let c = "";

    //КАЛЬКУЛЯТОР
    if (o == "+") {
        c = x + y;
        alert(`${x}+${y}=${c}`);
    } else if (o == "-") {
        c = x - y;
        alert(`${x}-${y}= ${c}`);
    } else if (o == "*") {
        c = x * y;
        alert(`${x}*${y}= ${c}`);
    } else if (o == "/") {
        c = x / y;
        if (c == Infinity) {
            alert("Нельзя делить на 0")
        } else {
            alert(`${x}/${y}= ${c}`);
        }

    } else if (o == "**") {
        c = x ** y;
        alert(`${x}**${y}= ${c}`);
    } else if (o == "%") {
        c = x % y;
        alert(`${x}%${y}= ${c}`);
    } else {
        alert("Введите корректный оператор");
    }
} else {
    alert("X, Y Должны быть числами");
}