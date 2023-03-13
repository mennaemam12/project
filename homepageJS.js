function show(id){
    let signin = document.getElementById(id);
    signin.style.display='block';
}
function hide(id){
    let x = document.getElementById(id);
    x.style.display='none';
}
//change header on scroll
let header = document.getElementById("myHeader")
let logo = document.getElementById("logo");
window.onscroll = function(){
    if(window.pageYOffset > 100){
        header.classList.add('sticky');
        logo.style.width = "60px";
    }
    else{
        header.classList.remove('sticky');
        logo.style.width = "100px";
    }
}
