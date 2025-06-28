// //**1St Question**/
//  *.
//  * @param {number} num 
//  * @returns {string} 
//  */
// function checkNumberType(num) {
//     if (typeof num !== 'number' || isNaN(num)) {
//         return "Not a number";
//     }
//     return Number.isInteger(num) ? "Integer" : "Decimal";
// }

// Example usage:
// console.log(checkNumberType(5));       // Output: "Integer"
// console.log(checkNumberType(5.5));     // Output: "Decimal"
// console.log(checkNumberType("hello")); // Output: "Not a number"
// //**2nd Question**/
// function isEven(marks){
//    const result= marks>=80? "pass":(marks>=60? "average":"fail");

//     return result;
// }
// console.log(isEven(90));
// console.log(isEven(60));
// console.log(isEven(30));
// function checkstatus(marks){
//     if(marks>=80){
//         return "pass";
//     }
//     else if(marks>=60){
//         return "average";
//     }
//     else{
//         return "fail";
//     }
// }
// console.log(checkstatus(90));
// console.log(checkstatus(60));
// console.log(checkstatus(30));

//**3rd Question**/
// f();
// f(undefined,undefined,1);
// f(1,2);
// f(1,2,3,4,5);
// f(1,3,6,4,7,8);
// function f(a=1, b="a",c)
// {
//     console.log("a  :", a, ", b :", b, ", c : ", c);
// }
//*4th Question//*
function add(...params){
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    return sum;
}
console.log(add());
console.log(add(1,));
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
console.log(add(1,2,3,4,5));
