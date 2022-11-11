$(document).ready(function () {

    AOS.init();//AOS 이벤트 셋팅

    //햄버거 버튼 클릭 이벤트
    var i = 0;
    $(".menu-btn").on("click", function () {
        var winScr = $(window).scrollTop();
        $("header").toggleClass("btn_on"); //헤더 그림자 사라짐
        $(this).toggleClass("btn_on"); //버튼 변형
        $(".nav-layer").fadeToggle(500).css({
            "top": winScr
        }); //메뉴레이어 페이드 이벤트

        if (i == 0) {
            $("body").css({
                "position": "fixed",
                "top": -winScr,
                "left": 0
            });
            i++
        } else if (i == 1) {
            $("body").css({
                "position": "static",
            });
            i == 0; //바디 고정,고정 해제
        }
    })

    //섹션1 svg 이벤트
    $(".sec01 svg").addClass("active");

    //섹션3 카드클릭 이벤트
    $(".sec03 .card").on("click", function () {
        $(this).toggleClass("rotate").siblings().removeClass("rotate"); //카드 turn
    })

    //섹션3,4 인포icon 클릭 이벤트(pc)
    

    //섹션4 필터클릭 이벤트
    $(".sec04 .filter>li").on("click", function () {
        $(this).addClass("pressed").siblings().removeClass("pressed"); //필터 색연필 효과
        var filter = $(this).attr("data-filter");

        if (filter == "all") {
            $(".sec04 .card").show();
        } else {
            $(".sec04 .card").not("." + filter).hide();
            $(".sec04 .card").filter("." + filter).show();
        } //아카이브 작업물 필터

    });

    //섹션4 카드클릭 이벤트
    $(".sec04 .card").on("click", function () {
        $(this).toggleClass("rotate").siblings().removeClass("rotate"); //카드 turn
    });

    //섹션4 프로젝트 클로즈 버튼 이벤트
    $(".project-bg .close").on("click",function(){
        $(".project-bg").hide();
    })

});