const button = document.getElementById('loadProd');
button.addEventListener('click', () => {
    console.log('button clicked');
    const ele =document.createElement ('div');
    ele.innerText="hello world";
    
    const parent=document.getElementById("container");
  
    // document.body.append(ele)
    const element1=`<div id="div"> hello </div>`
    const element2=`<div id="div"> hi </div>`
    const element3=`<div id="div"> how r </div>`
    const element4=`<div id="div"> You bro </div>`

    let allElements=element1+element2+element3+element4;

// container.innerText=allElements;
 container.innerHTML=allElements;
console.log(allElements);

    
    

    
});
