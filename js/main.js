

var elStartBtn = document.querySelector(".start__btn");
elStartBtn.addEventListener("click" , function(){
    elStartBtn.closest(".start").classList.toggle("start__nav-open")
})