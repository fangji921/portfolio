$(document).ready(function () {

    /*스크롤 이벤트 작성*/

    /*로고 클릭했을 때 메인 영역으로 도달*/
    $(".logo").on("click", function () {
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 800)
    })

    /*메뉴 클릭했을 때 그에 해당하는 영역에 도달!*/

    $(".menu_wrap li").on("click", function () {

        var i = $(this).index();
        var scrOffset = $(".scr").eq(i).offset().top;

        $("html,body").stop().animate({
            "scrollTop": scrOffset
        }, 800)

    })


    
    /*스크롤하여 해당영역 도달시 메뉴 이벤트 발생&유지*/

    var arr = new Array;
    var scrLength = $(".scr").length;
    var winHeight = $(window).height();
    var bodyHeight = $("body").height();
    var footerHeight = $("footer").height();

    for (i = 0; i < scrLength; i++) {
        var secOff = $(".scr").eq(i).offset().top;
        arr.push(secOff);
    }

    arr[4] = bodyHeight - winHeight - footerHeight

    function setNav() {
        var scrTop = $(this).scrollTop();

        for (i = 0; i < scrLength; i++) {
            if (scrTop >= arr[i] && scrTop < arr[i + 1]) {
                $(".menu_wrap li").removeClass("menuon");
                $(".menu_wrap li").eq(i).addClass("menuon");
            } else if (scrTop >= arr[scrLength - 1]) {
                $(".menu_wrap li").removeClass("menuon");
                $(".menu_wrap li").eq(scrLength - 1).addClass("menuon");
            }
        }

        if (scrTop >= $(".sec_1").offset().top) {
            $(".sec_1 .profile_wrap").addClass("fadeNrotate");
            /*프로필사진+텍스트 나타남*/
            $(".sec_1 .figure").addClass("appear")
            /*도형 나타남*/

        } else if (scrTop <= $(".sec_1").offset().top || scrTop >= $(".sec_2").offset().top) {
            $(".sec_1 .profile_wrap").removeClass("fadeNrotate");
            /*프로필사진+텍스트 사라짐*/
            $(".sec_1 .figure").removeClass("appear")
            /*도형 사라짐*/
        }

        /*섹션4번 영역 도달시 메뉴색깔 바뀜
        그 외의 영역에선 색깔 원복*/
        if (scrTop >= $(".sec_4").offset().top && scrTop < $(".sec_5").offset().top) {
            $("header .menu_wrap").addClass("change");
            $(".logo .white").addClass("change");
            $(".logo .purple").addClass("change");
        } else if (scrTop >= $("footer").offset().top - $(window).height() / 3) {
            $("header .menu_wrap").addClass("change");
            $(".logo .white").addClass("change");
            $(".logo .purple").addClass("change");
        } else {
            $("header .menu_wrap").removeClass("change");
            $(".logo .white").removeClass("change");
            $(".logo .purple").removeClass("change");
        }
    }

    $(window).on("scroll", setNav);
    $(window).on("resize", setNav);
    setNav();


})
