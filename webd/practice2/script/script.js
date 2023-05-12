$(function(){
    $(".nav ul li").mouseover(function(){
        $(".nav > ul > li > ul").stop().slideDown(300);
        $("#header .container").addClass("on");
    });
    $(".nav ul li").mouseout(function(){
        $(".nav > ul > li > ul").stop().slideUp(200);
        $("#header .container").removeClass("on");
    });

    // 슬라이드
    let currenIndex = 0;
    const $sliderWrap = $(".sliderWrap");   // 이미지 부모 : 움직이는 영역
    const $slider = $(".slider");           // 각각의 이미지
    const $sliderWidth = $slider.width()    // 이미지 가로값
    $sliderWrap.append($slider.first().clone(true));    // 첫 번째 이미지 마지막에 추가
    
    setInterval(function(){
        currenIndex++;  // 인덱스 증가
        $sliderWrap.animate({marginLeft: -$sliderWidth * currenIndex}, 600)

        if(currenIndex == $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({marginLeft: 0}, 0);
                currenIndex = 0;
            });
        }
    }, 3000)
});