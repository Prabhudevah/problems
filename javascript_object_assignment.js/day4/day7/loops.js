// const num=[2, 3, 4, 56, 78, 9, 7];
// num.forEach(myFunction);
// function myFunction(Value,index,value){
//    return value *5;
// }
// console.log(num);


const num1=[2, 3, 4, 56, 78, 9, 7];
const num2= num1.map(myFunction);
function myFunction(value, index, array) {
    return value * 5;
}
console.log(num2);
