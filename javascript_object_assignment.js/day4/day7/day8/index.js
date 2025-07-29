const {add}=require('./m1.js');
const sub=require('./m2.js');
const multiply=require('./m3.js');

    
let a;
let b;

function initializeNumber() {
    a = prompt("enter a first number");
    b = prompt("enter a second number");
    console.log(a,b);
   
}
function displayNumbers(){
    console.log(a, b);
}

function addNumbers() {
    console.log(a, b);
}

function subNumbers() {
    console.log(a, b);
}
function multiplyNumbers() { 
    console.log(a, b);
}



window.initializeNumber=initializeNumber;
window.displayNumbers=displayNumbers;
window.addNumbers=addNumbers;
window.subNumbers=subNumbers;
window.multiplyNumbers=multiplyNumbers;




