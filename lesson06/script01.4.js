function start11() {
    let x = +prompt ('Введите 1 значение');
    let y = +prompt ('Введите 2 значение');
    let z = +prompt ('Введите 3 значение');
    let result = average(x,y,z);
    alert (result.toFixed(2));
}

function average(x,y,z) {
    return (x + y + z) / 3   
}