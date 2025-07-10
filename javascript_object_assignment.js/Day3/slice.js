const str="Bhavana";
console.log(str.slice(-1,));

function con(...parame){
    newstr="";
    for(let i=0; i<parame.length; i++){
        newstr+=parame[i];
      
    }
    console.log(newstr);

}
con("prabhu"," ","kumar"," ","reddy");
con("123"," ","456"," ","7890");


let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/ig, "W3Schools");
console.log(newText); 

const str="i an the best devloper in java i know html css js";
console.log(str.split(" "));

