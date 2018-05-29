
$(document).ready(function(){
//    
//    
//_______________________________________________ <Ancre>
    $('a[href^="#"]').click(function() {
        var ou = $(this).attr("href").substr(1);
        var saut = $("a[name='"+ ou +"']");
        $('html,body').animate({scrollTop: $(saut).offset().top}, 1000);
        return false;
    });
//_______________________________________________ </Ancre> 
//    
//    
//    
//_______________________________________________ <Drop Down> 
    $(".services, .nav_hover").mouseenter(function(){
        $(".nav_hover").slideDown(500);
    });
    $(".services, .nav_hover").mouseleave(function(){
        $(".nav_hover").slideUp(500);
    });
//_______________________________________________ </Drop Down> 
//    
//  
//    
//    
//_______________________________________________ <Scroll> 
    $(window).scroll(function(){
        posScroll = $(document).scrollTop();
        if(posScroll >=123) 
            $("aside").css("right","30px");
        else
            $("aside").css("right","-100px");
    });
//_______________________________________________ </Scroll> 
//    
//    
//    
//    
//_______________________________________________ <Slide> 
//__________________________ <MAC> 
    $(function(){
        setInterval(function(){
            $(".slideshow ul").animate({marginLeft:-483},2000,function(){
                $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
            })
        }, 5000);
    });
//__________________________ <Iphone> 
        $(function(){
        setInterval(function(){
            $(".slideshow2 ul").animate({marginLeft:-125},2000,function(){
                $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
            })
        }, 4000);
    });
//_______________________________________________ </Slide> 
//    
//
//
//    
//_______________________________________________ <Zoom> 
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding    : 0,
            margin     : 5,
            nextEffect : 'fade',
            prevEffect : 'none',
            autoCenter : false,
            afterLoad  : function () {
                $.extend(this, {
                    aspectRatio : false,
                    type    : 'html',
                    width   : '95%',
                    height  : '95%',
                    content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
                });
            }
        });
//_______________________________________________ </Zoom> 
//
//
});