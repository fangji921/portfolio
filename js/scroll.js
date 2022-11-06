$(document).ready(function(){

    //스크롤 이벤트 작성
    //메뉴 클릭시 해당 영역에 도달!

    //모바일,태블릿 ver
    $(".nav-layer li").on("click", function () {

        var i = $(this).index();
        var scrOffset = $(".scroll").eq(i).offset().top;

        $(".nav-layer").fadeOut(500);//메뉴레이어 페이드 아웃

        $("html,body").stop().animate({
            "scrollTop": scrOffset
        }, 1000)//스크롤 자동이동


        $("header").removeClass("btn_on"); //헤더 그림자 사라짐
        $(".menu-btn").removeClass("btn_on"); //버튼 재변형
        $("body").css({
            "position": "static"
        });//바디 고정 해제

    })

    //pc ver
    $(".menu-wrap .menu").on("click", function () {

        var i = $(this).index();
        var scrOffset = $(".scroll").eq(i).offset().top;

        $("html,body").stop().animate({
            "scrollTop": scrOffset
        }, 1000)//스크롤 자동이동

    })

    //로고 클릭시 최상단으로 이동
    $("header .logo").on("click",function(){

        $("html,body").stop().animate({
            "scrollTop" : 0
        },1000)


    })

})