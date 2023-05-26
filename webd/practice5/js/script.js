// 이미지 슬라이드
const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = document.querySelectorAll(".slider__wrap img");
const clone = sliderImg[0].cloneNode(true);
sliderWrap.appendChild(clone);
const count = document.querySelectorAll(".slider__wrap img").length;
let currentIndex = 0;

setInterval(() => {
    sliderWrap.style.transition = "all 0.4s";
    currentIndex = (currentIndex+1) % count;
    sliderWrap.style.transform = `translateY(-${400 * currentIndex}px)`;

    if(currentIndex == count-1){
        setTimeout(() => {
            sliderWrap.style.transition = "all 0s";
            currentIndex = 0;
            sliderWrap.style.transform = `translateY(-${400 * currentIndex}px)`;
        }, 600);
    }
},3000);

// 메뉴구성
$("#nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(400);
});
$("#nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});

// 레이어 팝업
$(".modal__btn").click(function(){
    $(".modal").fadeIn();
});
$(".close").click(function(){
    $(".modal").fadeOut();
});