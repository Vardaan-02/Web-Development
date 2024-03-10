let button = window.document.querySelector("button");
let input = window.document.querySelectorAll("input");

button.addEventListener("click", ()=>{
    let a = parseInt(0);
    input.forEach(element => {
        a += parseInt(element.value);
    });
    a = parseInt(a/4.0);
    alert("Your percentage is " + a);
});