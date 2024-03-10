let list = Array.from(window.document.getElementsByTagName("button"));
let move = window.document.getElementsByClassName("move");
let heading = window.document.getElementsByClassName("heading")
list[0].addEventListener("click", ()=>{
    console.log(list[0]);
    move[0].classList.replace("toRight","toLeft");
    heading[0].innerHTML = "Login";
    heading[0].classList.replace("login","signup");
});
list[1].addEventListener("click", ()=>{
    console.log(list[1]);
    move[0].classList.replace("toLeft","toRight");
    heading[0].innerHTML = "Sign-Up";
    heading[0].classList.replace("signup","login");
});