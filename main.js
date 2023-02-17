function one(){
    let x1=prompt("Введите первое число");
    let x2=prompt("Введите второе число");
    let y1=x1/3.6;
    let y2=x2*3.6;
    console.log(x1," км/ч соответсвтует ",y1," м/с");
    console.log(x2," м/с соответсвтует ",y2," км/ч");
}

function two(){
    let a=+prompt();
    let b=+prompt();
    let c=+prompt();
    let m=0;

    if(a>b){
        m=a;
        a=b;
        b=m;
    }
    if( b>c){
        m=b;
        b=c;
        c=m;
    }
    if(a>b){
        m=a;
        a=b;
        b=m;
    }
    let p=(a+b+c)/2
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    if(c>=(a+b)){
        console.log("треугольника не существует");
    }
    else{
        console.log("Периметр равен ", a+b+c);
        console.log("Площадь равна ", s);
        console.log("Отношение равно ", p*2/s);
    }
}


function three(){
    let s=+prompt("Введите число");
    for (let i=1;i<s+1;i++){
    
        if (i%5==0){
            console.log(i," fizz buzz");
        }
        else if (i % 2===0){
            console.log(i," buzz");
        }
        else{
            console.log(i," fizz");
        }
    }
}
function four(){
    let s="";

    for(let i = 1;i<10;i++){
        for(let k =0;k<i;k++){
            if(i%2==0){
                s=s+"*";
            }
            else{
                s=s+"#";
            }
        }
        
        s=s+"\n";
    }
    s+="||";
    console.log(s);
}

function five(){
    let s=20;
    let a=+prompt("Введите число");
    console.log(s);
    do{
        if(s>a){
            console.log("Ваше число меньше");
            a=+prompt("Введите число");
        }
        if(s<a){
            console.log("Ваше число больше");
            a=+prompt("Введите число");
        }
        if (s==a){
            console.log("Число отгадано");
        }
    }while(s!==a);
}
function six(){
    let n=+prompt("n");
    let x=+prompt("x");
    let y=+prompt("y");
    if(n % x==0 && n % y == 0){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
function seven(){
    let n=+prompt("Номер месяца");
    switch (Math.trunc(n/3.1)){
        case 0:
            console.log("1 квартал");
            break;
        case 1:
            console.log("2 квартал");
            break;
        case 2:
            console.log("3 квартал");
            break;
        case 3:
            console.log("4 квартал");
            break;
        default:
            console.log("error");
    }
    //console.log( Math.trunc(n/3.1+1)," квартал");
}
