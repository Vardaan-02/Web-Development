function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByTagName("header")[0].style.top = "-100px";
    }
    else {
        document.getElementsByTagName("header")[0].style.top= "0px";
    }
}

window.onscroll = function(){
    scroll();
};

console.log(document.getElementsByTagName("header")[0]);
