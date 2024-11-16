let adad = document.querySelectorAll(".adad");
let mosave = document.querySelector(".mosave");
let showAdad = document.querySelector(".showadad");
let clr = document.querySelector(".clr")
let flag = false

adad.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if(flag == true){
        showAdad.value=""
        flag= false
    }
    showAdad.value += elem.innerHTML;
  });
});

mosave.addEventListener("click", function () {
  showAdad.value = eval(showAdad.value);
  flag = true
});


clr.addEventListener("click",function(){
    showAdad.value=""
})