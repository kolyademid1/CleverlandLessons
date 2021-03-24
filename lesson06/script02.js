
function enterNum() {
    let num = +prompt ('Введите цифру');
    if (isNaN (num)) {
        alert ('Программа принимает только цифры!');
    }else if (num >=10){
        return num ** 2
    }
    else if (num < 7){
        return 'Число меньше 7'
    }
    else if (9 < num < 7){
        return --num
    } 
}

function start02 (){
    alert(enterNum());
}

