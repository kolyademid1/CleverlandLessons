// Задание 03 
function start03(){
    let x;
    let sum = 0;
    do {
        x = prompt ('Введите очередное слагаемое, чтобы узнать сумму при отмене');
        sum += +x;    
    }
    while (x != null)
    alert(sum);
}