const submit=document.getElementById("submit");
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("Form submitted");
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
  console.log(name,email);
  
});
