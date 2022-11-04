$(document).ready(function () {

    //메뉴버튼 클릭 이벤트
    $(".menu-btn").on("click", function () {
        $("body").toggleClass("btn_on");
        $("header").toggleClass("btn_on"); //헤더 그림자 사라짐
        $(this).toggleClass("btn_on"); //버튼 변형
        $(".nav-layer").fadeToggle(500); //메뉴레이어 페이드 이벤트
    })

    //섹션1 svg 이벤트
    $(".sec01 svg").addClass("active");

    //섹션3 카드클릭 이벤트
    $(".sec03 .card").on("click", function () {
        $(this).toggleClass("rotate").siblings().removeClass("rotate"); //카드 turn
    })

    //섹션4 필터클릭 이벤트
    $(".sec04 .filter>li").on("click", function () {
        $(this).addClass("pressed").siblings().removeClass("pressed");
    })

    //섹션4 카드클릭 이벤트
    $(".sec04 .card").on("click", function () {
        $(this).toggleClass("rotate").siblings().removeClass("rotate"); //카드 turn
    })

});