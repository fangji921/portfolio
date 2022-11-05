$(document).ready(function(){

    //스크롤 이벤트 작성
    //메뉴 클릭시 해당 영역에 도달!

    //모바일,태블릿 ver
    $(".nav-layer li").on("click", function () {

        var i = $(this).index();
        var scrOffset = $(".scroll").eq(i).offset().top;

        $(".nav-layer").fadeOut(500);

        $("html,body").stop().animate({
            "scrollTop": scrOffset
        }, 1000)

    })

    //pc ver
    $(".menu-wrap .menu").on("click", function () {

        var i = $(this).index();
        var scrOffset = $(".scroll").eq(i).offset().top;

        $("html,body").stop().animate({
            "scrollTop": scrOffset
        }, 1000)

    })

    //로고 클릭시 최상단으로 이동
    $("header .logo").on("click",function(){

        $("html,body").stop().animate({
            "scrollTop" : 0
        },1000)

    })

})