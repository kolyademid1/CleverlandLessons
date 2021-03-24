
// Версия 1

//  function calcMin (a,b,c){
//     if (a <= b && a <= c) {
//         return a;
//     }else if (b <= c && b <= a) {
//         return b;
//     }else if (c <= a && c <= b) {
//         return c;
//     }

//  }

// Версия 2

function calcMin (a,b,c){
    let min = a;
    if (min > b){
       min = b;
    }
    if (min > c) {
        min= c;
    }
    return min;
}

function start03() {
   let a = prompt ('Ваше первое число');
   let b = prompt ('Ваше второе число');
   let c = prompt ('Ваше третье число');
   let result = calcMin (a,b,c);
   alert (result);
}