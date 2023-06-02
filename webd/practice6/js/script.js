const sliDer = document.querySelector("#slider");
const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = document.querySelector(".s1");
const cloNe = sliderWrap.firstElementChild.cloneNode(true);
sliderWrap.appendChild(cloNe);

let currentIndex = 0;
setInterval(() =>{
    currentIndex = (currentIndex+1) % 4;
    console.log(currentIndex)
    sliderWrap.style.transition = "all 0.3s"
    sliderWrap.style.transform = `translateY(-${(sliderImg.clientHeight) * currentIndex}px)`

    if(currentIndex == 3){
        setTimeout(() => {
            currentIndex = 0;
            sliderWrap.style.transition = "all 0s"
            sliderWrap.style.transform = `translateY(-0px)`;
        },700);
    }
}, 2000)

// function sliderH(){
//     sliDer.style.height = `${sliderImg.clientHeight}px`;

//     requestAnimationFrame(sliderH)
// }
// sliderH();

// $("#aside .menu > ul > li > ul").css("display", "none");
// $("#aside .menu > ul").mouseover(function(){
//     $("#aside .menu > ul > li > ul").stop().fadeIn()
// });
// $("#aside .menu > ul").mouseout(function(){
//     $("#aside .menu > ul > li > ul").stop().fadeOut()
// });

// $("#aside .menu > ul > li > ul").css("display", "none");
$("#aside .menu > ul").mouseover(function(){
    $("#aside .menu > ul > li > ul").css("transform", "translateY(-38px) scaleX(1)")
    $("#aside .menu > ul > li > ul > li > a").css()
});
$("#aside .menu > ul").mouseout(function(){
    $("#aside .menu > ul > li > ul").css("transform", "translateY(-38px) scaleX(0)")
    $("#aside .menu > ul > li > ul > li > a").css()
});


$(".slider__link > a > .m1").click(function(){
    $(".modal").fadeIn();
});
$(".xbutton").click(function(){
    $(".modal").fadeOut();
});

$(".gal").click(function(){
    $(".gallery__inner").show()
});
$(".not").click(function(){
    $(".gallery__inner").hide()
});