let button = window.document.querySelector("button");
let input = window.document.querySelectorAll("input");

button.addEventListener("click", ()=>{
    let a = parseInt(input[1].value);
    a = parseInt(a/(input[0].value*input[0].value));
    alert("Your BMI is " + a);
});