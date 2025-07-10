const num=[2,3,4,56,78,9,7];
const fruit=["banana","apple","orange","kiwi"];
function comparator(a, b) {
    return a - b;
}
const sorted = num.sort(comparator);
const sortedFruits = fruit.sort();
console.log(num);
console.log(fruit);


