
$(function(){
    
    $("#menu-responsive").click(function () {
        $("nav ul li").toggleClass("horizontal-menu")
        $("nav").toggleClass("nav-horizontal-invisible");
    });
    
    $(window).scroll(function(){
       console.log(window.pageYOffset); 
        if (window.pageYOffset > 100)
            {
                $("#roll-up").css("display", "block");
            }
        else
            {
                $("#roll-up").css("display", "none");
            }
    });
    
})