// / Задание 02 
function start02(){
    let n = Number (prompt (" Введите сколько вы хотите четных чисел"));
    let num = 1; 
    let count=0;
    while (count < n){
        if (num % 2 == 0){
            if (num % 5==0){
                num++;
                continue;
            }
            console.log (num);
            count++;
            }
        num++;
    }
}