// const num=[2,3,4,56,78,9,7];
// const fruit=["banana","apple","orange","kiwi"];
// function comparator(a, b) {
//     return a - b;
// }
// const sorted = num.sort(comparator);
// const sortedFruits = fruit.sort();
// console.log(num);
// console.log(fruit);


product=[
    {
        name:"laptop",
        price: 30,  
        brand:"dell",
        date: "2024-11-03",
    },
    {
        name:"mobile",
        price: 20,  
        brand:"apple",
        date: "2023-10-02",
    },
    {
        name:"tablet",
        price: 25,  
        brand:"samsung",
        date: "2023-10-03",
    }
    
];
function comp(a, b) {
    return a.price - b.price;
}
console.log(product.sort(comp));





