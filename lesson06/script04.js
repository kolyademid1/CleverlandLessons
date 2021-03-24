function start04() {
    let num = prompt ('Ваше число');
    let power= prompt ('Степень');
    let result = calcpower (num,power);
    alert (result);
}
function calcpower(num,power) {
        return num ** power
}