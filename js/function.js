$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".scroll").fadeIn(1000);
        }else{
            $(".scroll").fadeOut(1000);
        }
    });
    $(".scroll").click(function(){
        $('html,body').animate({ scrollTop: 0}, 500);
    });
});