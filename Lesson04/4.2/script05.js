function start05(){
    const DECIMETRE = 1/10;
    const KILOMETRE = 1000;
    const METRE = 1;
    const MILLIMETRE = 1/1000;
    const CENTIMETRE = 1/100;
    
    let N = +prompt ('Введите единицу измерения (1-дм/ 2-км/ 3-м/ 4-мм/ 5-см)');
    let L = +prompt ('Введите количество');
    let result =0;
    switch (N) {
        case 1:
            result=`${L*DECIMETRE} метров`;
            
            break;
        case 2:
            result = `${L*KILOMETRE} метров`;
            break;
        case 3:
            result = `${L*METRE} метров`;
            break;
        case 4:
            result = `${L*MILLIMETRE} метров`;
            break;
        case 5:
            result = `${L*CENTIMETRE} метров`;
            break;
        default: alert ('Неизвестная единица измерения');
            break;
    
    }
        alert (` Получается ${result}`)
}
