function  convertSpeed(x1, s){
    if (s=="toMS"){
        let y1=x1/3.6;
        console.log(x1," км/ч соответсвтует ",y1," м/с");
    }
    else if(s=="toKMH"){
        let y2=x1*3.6;
        console.log(x1," м/с соответсвтует ",y2," км/ч");
    }
    else{
        console.log("ERROR");
    }
}

function  absValue (x){
   if (x<0){
    console.log(-x);
   }
   else{
    console.log(x);
   }
}
function object(){
    let student = {
        group: 201,
        last_name: "Иванов",
        first_name: "Иван"
    };
    keys = Object.keys(student);
    console.log("Список свойств: "+Object.keys(student)[0]+", "+Object.keys(student)[1]+", "+Object.keys(student)[2]+"\n");
    console.log("Студент " +student.first_name+" "+ student.last_name+" учится в "+student.group+" группе\n");
}
function four(min,max){
    
    console.log(randomNumber(min,max));
}
function randomNumber(min,max){
    
    return ( Math.floor(min+(Math.random() * (max-min))));
}

function getarr(){
    let arr = new Array();
    let arr1 = new Array();
    let n =+prompt("длина массива");
    for (let i=0;i<n;i++){
        arr[i]=prompt();
    }
    let k =+prompt("Количество случайных значений");
    for (let i=0;i<k;i++){
        arr1.push(arr[randomNumber(0,n)]);
        
    }
    return arr1;
}
function five(){
    
    console.log(getarr());
}
