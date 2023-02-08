$(function(){
    $(".headerPage").load("header.html");
    $(".footerPage").load("footer.html");
    
    $(window).scroll(function(){
        //var $(window).scrollTop(); 為 scroll
    var scroll = $(window).scrollTop();
    if( scroll >= 70){
        // 當卷軸超過70px,.gototop就淡入，如果小於就淡出
        $(".goTopButton").fadeIn();
    }
    else{
        $(".goTopButton").fadeOut();   
    }
    });
    // 當我按下.gototop時，添加動畫讓卷軸跑道最上面
    $('.goTopButton').click(function(){
        $('html,body').animate({
            scrollTop:$('html').offset().top
        })
        return false;
    });

    var nav = $('.nav');
    var win = $(window);
    $('.menu-icon').on('click', function(e) {
        e.preventDefault();
        nav.slideToggle();
    });
    win.resize(function() {
        if (win.width() > 1200 && nav.is(':hidden')) {
        nav.removeAttr('style');
        }
    });
});

$(document).ready( function () {
    //North
    $(".foodNameNorth1").text(food["North1"]["Name"])
    $(".foodImageNorth1").attr("src", "FoodImg/史密斯華倫斯基牛排館.jpg")
    $(".foodLocationNorth1").text(food["North1"]["Location"])
    $(".foodPhoneNorth1").text(food["North1"]["Phone"])
    $(".foodWorkingTimeNorth1").text(food["North1"]["WorkingTime"]["Monday"])
    $(".foodWebsite").text(food["North1"]["Web_IG"])

    $(".foodNameNorth2").text(food["North2"]["Name"])
    $(".foodImageNorth2").attr("src", "FoodImg/小班韓式烤腸.jpg")
    $(".foodLocationNorth2").text(food["North2"]["Location"])
    $(".foodPhoneNorth2").text(food["North2"]["Phone"])
    $(".foodWorkingTimeNorth2").text(food["North2"]["WorkingTime"]["Monday"])
    
    $(".foodNameNorth3").text(food["North3"]["Name"])
    $(".foodImageNorth3").attr("src", "FoodImg/漢堡俱樂部.jpg")
    $(".foodLocationNorth3").text(food["North3"]["Location"])
    $(".foodPhoneNorth3").text(food["North3"]["Phone"])
    $(".foodWorkingTimeNorth3").text(food["North3"]["WorkingTime"]["Monday"])
    //Central
    $(".foodNameCentral1").text(food["Central1"]["Name"])
    $(".foodImageCentral1").attr("src", "FoodImg/panslut.jpg")
    $(".foodLocationCentral1").text(food["Central1"]["Location"])
    $(".foodPhoneCentral1").text(food["Central1"]["Phone"])
    $(".foodWorkingTimeCentral1").text(food["Central1"]["WorkingTime"]["Monday"])

    $(".foodNameCentral2").text(food["Central2"]["Name"])
    $(".foodImageCentral2").attr("src", "FoodImg/盛食咖哩.jpg")
    $(".foodLocationCentral2").text(food["Central2"]["Location"])
    $(".foodPhoneCentral2").text(food["Central2"]["Phone"])
    $(".foodWorkingTimeCentral2").text(food["Central2"]["WorkingTime"]["Monday"])

    $(".foodNameCentral3").text(food["Central3"]["Name"])
    $(".foodImageCentral3").attr("src", "FoodImg/蝦蝦拉麵.jpg")
    $(".foodLocationCentral3").text(food["Central3"]["Location"])
    $(".foodPhoneCentral3").text(food["Central3"]["Phone"])
    $(".foodWorkingTimeCentral3").text(food["Central3"]["WorkingTime"]["Monday"])
    //South
    $(".foodNameSouth1").text(food["South1"]["Name"])
    $(".foodImageSouth1").attr("src", "FoodImg/荏苒咖啡.jpg")
    $(".foodLocationSouth1").text(food["South1"]["Location"])
    $(".foodPhoneSouth1").text(food["South1"]["Phone"])
    $(".foodWorkingTimeSouth1").text(food["South1"]["WorkingTime"]["Monday"])

    $(".foodNameSouth2").text(food["South2"]["Name"])
    $(".foodImageSouth2").attr("src", "FoodImg/霜空咖啡.jpg")
    $(".foodLocationSouth2").text(food["South2"]["Location"])
    $(".foodPhoneSouth2").text(food["South2"]["Phone"])
    $(".foodWorkingTimeSouth2").text(food["South2"]["WorkingTime"]["Monday"])

    $(".foodNameSouth3").text(food["South3"]["Name"])
    $(".foodImageSouth3").attr("src", "FoodImg/咖啡一派 the coffee folks.jpg")
    $(".foodLocationSouth3").text(food["South3"]["Location"])
    $(".foodPhoneSouth3").text(food["South3"]["Phone"])
    $(".foodWorkingTimeSouth3").text(food["South3"]["WorkingTime"]["Monday"])
    //East
    $(".foodNameEast1").text(food["East1"]["Name"])
    $(".foodImageEast1").attr("src", "FoodImg/蔓蔓.jpg")
    $(".foodLocationEast1").text(food["East1"]["Location"])
    $(".foodPhoneEast1").text(food["East1"]["Phone"])
    $(".foodWorkingTimeEast1").text(food["East1"]["WorkingTime"]["Monday"])

    $(".foodNameEast2").text(food["East2"]["Name"])
    $(".foodImageEast2").attr("src", "FoodImg/青嶼.jpg")
    $(".foodLocationEast2").text(food["East2"]["Location"])
    $(".foodPhoneEast2").text(food["East2"]["Phone"])
    $(".foodWorkingTimeEast2").text(food["East2"]["WorkingTime"]["Monday"])

    $(".foodNameEast3").text(food["East3"]["Name"])
    $(".foodImageEast3").attr("src", "FoodImg/離海5分鐘.jpg")
    $(".foodLocationEast3").text(food["East3"]["Location"])
    $(".foodPhoneEast3").text(food["East3"]["Phone"])
    $(".foodWorkingTimeEast3").text(food["East3"]["WorkingTime"]["Monday"])
});
