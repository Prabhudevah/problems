btn.addEventListener = ('mouseover',() =>{
    console.log("Mouseover");
    
})
btn.addEventListener = ('mouseleave',() =>{
    console.log("Mouseleave");
})

btn.addEventListener = ('click',() =>{
    console.log("Clicked");
    btn.removeEventListener('mouseover', mouseOverHandler);
    btn.removeEventListener('mouseleave', mouseLeaveHandler);
    btn.removeEventListener('click', clickHandler);
})

btn.addEventListener = ('keyup', (event) => {
    console.log("Keyup");
    console.log(event);
})
    
    