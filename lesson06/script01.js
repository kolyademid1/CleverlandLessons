function start01 (){
    acceptAge();
}

function acceptAge() {
    let age = +prompt ('Сколько вам лет?');
    if (isNaN (age)) {
        alert ('Необходимо ввести возраст');   
    }else if (age >= 16){
        alert('Добро пожаловать!');
    }else if (age < 16){
        alert('Извините,вы еще молоды');
    }
}

