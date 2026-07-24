
$(document).ready(function () {
    /*burger menu for phone size*/
    $(".button").click(function(e){
        e.preventDefault();
        $("body").toggleClass("active");
    });

    /*cart sidebar*/
    $(".sidebar a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active").parents().siblings().find("a").removeClass("active");
    });
    
    /*cart items addtocart*/
     $(".items-inner>ul>li>a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");
    });

    /*cart items heart*/ 
    $(".heart-btn a").click(function(e){
    e.preventDefault();
    $(this).parent().parent().addClass("open");
    });
    $(".heart-btn-open a").click(function(e){
    e.preventDefault();
    $(this).parent().parent().removeClass("open");
    });

    
});


 function showBtnCondition() {
   if ($(this).scrollTop() > 300) {
     $('.scroll-up').fadeIn();
       } else {
        $('.scroll-up').fadeOut();
      }
    }
$(window).scroll(showBtnCondition);