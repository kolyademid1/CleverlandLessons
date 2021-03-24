function start10 () {
    let a = +prompt ('Введите a');
    let b = +prompt ('Введите b');
    let c = +prompt ('Введите степень');
    let f = foo;
    let result = f(a,b,c);  
    console.log(result);
}
function foo(a,b,c) {
    return  multiply(a,b) ** c  
}

