var startTime;
var sliderIndex = 0;
var slider_item = document.getElementsByClassName("slider_item");
var slider_long = document.getElementsByClassName("slider_long")[0];
var header_text = document.getElementsByClassName("header_text");
var slider_btn = document.getElementsByClassName("slidebtn");
var landing_container = document.querySelector(".landing_container");
var cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function(){
    document.querySelector(".header_container").remove();
})


function mySliderButton(n) {
    myFunction(sliderIndex = n)
}
myFunction()
myFunction2()
function myFunction() {
    if (sliderIndex > 2) {
        sliderIndex = 0
    }
    for (var i = 0; i < header_text.length; i++) {
        header_text[i].style.display = 'none'
        slider_btn[i].style.backgroundColor = ''
    }

    if (sliderIndex === 0) {
        slider_long.style.transform = 'translateX(0%)'
        header_text[sliderIndex].style.display = 'block'
    }
    if (sliderIndex === 1) {
        slider_long.style.transform = 'translateX(-20%)'
        header_text[sliderIndex].style.display = 'block'
    }
    if (sliderIndex === 2) {
        slider_long.style.transform = 'translateX(-40%)'
        header_text[sliderIndex].style.display = 'block'
    }
    slider_btn[sliderIndex].style.backgroundColor = 'white'

}


function myFunction2() {
    myFunction()
    sliderIndex++
 
         startTime = setTimeout(myFunction2, 6000)
  
   
}

landing_container.addEventListener("mouseenter", function (e) {
    clearInterval(startTime)
});
landing_container.addEventListener("mouseleave", function (e) {
    startTime = setTimeout(myFunction2, 6000)
});

var dropdown_container = document.querySelector(".dropdown_container");
function openMenu(e) {
    var targetCon = e.target.parentElement.children[1];
    if (!targetCon.classList.contains("increase")) {
        targetCon.classList.add("increase");

    }

}

function dropdownClose(e) {
    var targetCon = e.target.parentElement.parentElement.children[1];
    if (targetCon.classList.contains("increase")) {
        targetCon.classList.remove("increase")
    } else {
        console.log('no way2')
    }
}


var nav_ul = document.querySelector('.nav_ul');

function openNav() {
    nav_ul.classList.toggle("increaseul")
}


var boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

// checkBoxes();

function checkBoxes() {
    var triggerBottom = window.innerHeight / 1 * 2;
    for (var i = 0; i < boxes.length; i++) {
        var boxTop = boxes[i].getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            boxes[i].classList.add("show");
        }

    }
    // boxes.forEach(function (box) {
    //     var boxTop = box.getBoundingClientRect().top;

    //     if (boxTop < triggerBottom) {
    //         box.classList.add("show");
    //     }

    // })
}



