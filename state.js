// 1

let income = parseInt(prompt("Enter your income: "));

if(income<=250000){
    console.log("Null");
}
else if(income>250000 && income <= 500000){
    console.log(tax = (income - 250000)*0.05);
}
else if(income>500000 && income <= 1000000){
    console.log(12500+(income - 500000)*0.2);
}
else{
    console.log(112500 + (income - 1000000)* 0.3);
}

// 2

const weight = parseInt(prompt("Enter the weight: "));
if(weight < 0)
    {console.log("choose>0");
    }
const destination = prompt("Enter destination:");
if(weight>0 && weight <=1){
    if(destination == "local"){
        console.log("5");
    }
    else if(destination == "national"){
        console.log("8");
    }
    else {
        console.log("15");
    }
}
if(weight>1 && weight <=5){
    if(destination == "local"){
        console.log("10");
    }
    else if(destination == "national"){
        console.log("15");
    }
    else {
        console.log("30");
    }
}
if(weight>5 && weight <=10){
    if(destination == "local"){
        console.log("20");
    }
    else if(destination == "national"){
        console.log("25");
    }
    else {
        console.log("50");
    }
}
if(weight>10){
    if(destination == "local"){
        console.log("30");
    }
    else if(destination == "national"){
        console.log("35");
    }
    else {
        console.log("70");
    }
}

// 3
const units = parseInt(prompt("Enter the units:"));
if(units < 0) {
    console.log("choose>0");
}
if(units > 0 && units <= 100){
    console.log(units*1);
}
else if(units > 100 && units <=300){
    var unit = units - 100;
    console.log(`bill = ${100+unit*1.5}`);
}
else if(units > 300 ){
    var unit = units-300;
    console.log(`bill = ${100+200*1.5+unit*2}`)
}
else{
    console.log("invalid");
}