// Задание 04 
function start04(){
    let sum = 0;
    let n = +prompt ('До какой цифры считаем сумму всех натуральных чисел?')
    for (let i=1; i<=n; i++){
        sum+=i;
    }
    console.log (sum);
}