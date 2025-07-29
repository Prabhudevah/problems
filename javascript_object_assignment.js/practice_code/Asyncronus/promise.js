function fetchdata(){
    return new Promise((resolve, reject) => {
        const response = {
            status: 200,
            message: "Sample Data",
            headers: {

            },
        json: () => {
            return new Promise((resolve, reject) => {
              resolve(["str1", "str2", "str3"]);
            })
        }
    }
    setTimeout(() => {
        resolve(response);
    }, 2000);
});

}

// fetchdata().then((responce) => {
//     console.log(responce);
//     console.log(responce.json());

//     return responce.json();
// }).then((data) => {
//     console.log(data);

// }).catch((error) => {
//     console.error("Error:", error);
// });
const responce=await fetchdata();
console.log(responce);
const data= await responce.json();
console.log(data);

// data.then((data) => {
//         console.log(data);
//     })