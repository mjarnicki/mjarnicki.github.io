
$(function(){
    var width = window.innerWidth;
    console.log(width);
    
    
    $("#menu-responsive").click(function () {
        $("nav ul li").toggleClass("horizontal-menu")
        $("nav").toggleClass("nav-horizontal-invisible");
    });
    
    
    
})