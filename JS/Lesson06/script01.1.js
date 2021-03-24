function start08(){
    let name = prompt ('Как вас зовут?');
    hello(name); 
}

function hello(name) {
    if (name == undefined || name.trim () == '') {
        name = 'Гость'
    }
    alert ('Привет, ' + name);
}   

