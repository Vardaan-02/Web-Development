function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByTagName("header")[0].style.top = "0";
    }
    else {
        document.getElementsByTagName("header")[0].style.top= "-1000px";
    }
}

window.onscroll = function(){
    scroll();
};

console.log(document.getElementsByTagName("header")[0]);