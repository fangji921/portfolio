$(document).ready(function () {
////////////////////////////////////
////// ARCHIVE 슬라이드 영역 ///////
///////////////////////////////////

    function setSlider() {
        var lastItem = $(".track_box .img_box:last-child").clone();
        var firstItem = $(".track_box .img_box:first-child").clone();
        $(".track_box").append(firstItem).prepend(lastItem);
        $(".track_box div:first-child").removeClass("nxt").addClass("left");
        $(".track_box div:last-child").removeClass("prv").addClass("right")
    }
    setSlider();
    var sliderList = ["left", "prv", "current", "nxt", "right"]
    $(document).on("click", ".track_box a", function (e) {
        e.preventDefault()
    })
    $(document).on("click", ".track_box .img_box", function () {
        var idx = $(this).index();
        var sliderLen = $(".track_box > div").length;
        var sliderWidth = $(".track_box div").width();
        var df = $(".track_box").css("left");
        df = parseInt(df);
        var idxIndicator = $(this).attr("data-idx");
        $(".web_title h5").eq(idxIndicator).fadeIn(400).siblings().fadeOut(400);
        
        if (idx === 3) {
        console.log("lalala");

            for (i = 0; i < sliderLen; i++) {
                var num = idx % sliderLen
                $(".track_box > div").eq(i).removeClass(sliderList[i]);
                if (num <= 0) {
                    $(".track_box > div").eq(num).addClass(sliderList[sliderLen - 1])
                } else {
                    $(".track_box > div").eq(num).addClass(sliderList[num - 1])
                }
                idx++
            }
            $(".track_box").stop().animate({
                "left": df - sliderWidth
            }, 600, "linear", function () {
                $(".track_box > div").first().remove();
                var item = $(".track_box .prv").clone();
                $(".track_box").append(item);
                $(".track_box > div").eq(4).removeClass("prv").addClass("right");
                $(".track_box").css("left", df)
            })
        } else if (idx === 1){
            for (i = 0; i < sliderLen; i++) {
                var num = idx % sliderLen
                $(".track_box > div").eq(i).removeClass(sliderList[i]);
                if (num <= 0) {
                    $(".track_box > div").eq(num).addClass(sliderList[sliderLen + 1])
                } else {
                    $(".track_box > div").eq(num).addClass(sliderList[num + 1])
                }
                idx++
            }
            $(".track_box").stop().animate({
                "left": df + sliderWidth
            }, 600, "linear", function () {
                $(".track_box > div").last().remove();
                var item = $(".track_box .nxt").clone();
                $(".track_box").prepend(item);
                $(".track_box > div").eq(0).removeClass("nxt").addClass("left");
                $(".track_box").css("left", df)
            })
        }
    })

////////////////////////////////////
///////// ARCHIVE 팝업박스 /////////
///////////////////////////////////

    var scr;
    $(document).on("click", ".img_box", function () {
        var label = $(this).index();
        if (label === 2) {
            scr = $(window).scrollTop();
            $("body").css({
                "position": "fixed",
                "left": 0,
                "top": -scr
            })
            var idx = $(this).attr("data-idx");
            $(".popup_box").parent().fadeIn(400);
            $(".popup_box").fadeOut();
            $(".popup_box").eq(idx).fadeIn(450)
        }
    })
    $(".popup_bg").on("click", function () {
        $(this).fadeOut(400);
        $("body").css("position", "static");
        $(window).scrollTop(scr)
    }).find(".close").on("click", function () {
        $(".popup_bg").fadeOut(400);
        $("body").css("position", "static");
        $(window).scrollTop(scr)
    })
    $(".popup_wrap").on("click", function (e) {
        e.stopPropagation()
    })
})
