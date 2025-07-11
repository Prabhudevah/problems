// let num= new Set();
// num.add(22);
// num.add(33);    
// num.add(44);
// console.log(num); 

// const num=[1,2,3,4,5,2,1,3,4,55,2,3,1]
// const uniqueNum=new Set(num);
// console.log(uniqueNum); 

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);

let text = "";
for (const x of C) {
  text += x;
}
console.log(text); 
