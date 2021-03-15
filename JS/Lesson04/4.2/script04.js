function start04 () {
    let markString = prompt('Введите уровень знаний');
    let mark = parseInt(markString, 10);
    if (isNaN (mark)) {
        alert("Введеный параметр не является числом!");
    }else if (mark == 1){
        alert('плохо');
    }else if (mark == 2){
        alert('неудовлетворительно');
    }else if (mark == 3){
        alert('удовлетворительно');
    }else if (mark == 4){
        alert('хорошо');
    } else if (mark == 5){
        alert('отлично');
    } else {
        alert('Такое оценить трудно')
    }
}