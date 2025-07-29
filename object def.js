// const obj={
//     name: "John",
//     age: 30,
//     fullname:""

// }
// obj["fullname"]="john";
// console.log(obj.class);
// const x = new Object();
// function Person(name, age,last,eye) {
//     this.name = name;
//     this.age = age;
//     this.last = last;
//     this.eye = eye;
// }
// const person1 = new Person("John", 30,"Doe","blue");
// console.log(person1); // Output: John
// console.log();



// let obj=new BigInt(1234567890123456789012345678901234567890n);
// console.log(obj); // Output: 1234567890123456789012345678901234567890n
// let obj2=new Symbol("This is a symbol");
// console.log(obj2); // Output: Symbol(This is a symbol)

// const user={
//     name: "Alice",
// }
// const u2=user;
// u2.name="bob";
// console.log(user);
// console.log(u2);

// functions

// const a={};
// const b=a;
// console.log(a===b);

// let user={
//     name: "Alice",
//     age: 25,
//     address:{ city: "New York", zip: "10001" }
//     };

//     function processobject({...obj}) {
//         // Modifying the original object
//         obj.city = "losangles";
//         obj.name = "Bob";
//       return obj;
//     }
//  console.log(user);
//  console.log(processobject(user)); // Output: { name: 'Bob', age: 25, address: { city: 'New York', zip: '10001' } }
 
 let Person={
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
 