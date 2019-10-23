
$(function(){
    //trigger on navigation anchor hover
    $("nav ul a").hover(
        function() {
            $(this).css({"border-bottom":"5px solid brown"});
        }, function() {
            $(this).css({"border-bottom":"none"});
    })
    
    // trigger on more button
    $(".more-list").on("click",function(){
        if($("header").hasClass("active")){
            $("header").removeClass("active");
            $("header").css({"background-color":"black"});
            $("header").css({"color":"white"});
            $("header nav ul a").css({"color":"white"});
            $("header .expand-nav").slideUp("fast");
            $("header .main-logo .logo1").show();
            $("header .main-logo .logo2").hide();
            $("header .main-search i").css({"color":"white"});
        }else{
            $("header").addClass("active");
            $("header").css({"background-color":"white"});
            $("header").css({"color":"black"});
            $("header nav ul a").css({"color":"black"});
            $("header .expand-nav").slideDown("fast");
            $("header .main-logo .logo2").show();
            $("header .main-logo .logo1").hide();
            $("header .main-search i").css({"color":"black"});
        }
    })
    $("header .search-box i").on("click",function(){
            $(this).addClass("active");
            $("header .search-box input").show();
    })


        // trigger on screen resize
        $(window).resize(function() { 
        var documentWidth = $(document).width();
        if(documentWidth <= 1200 ){
            if($("nav ul li:nth-last-child(2)").html() != undefined){
                $("header .expand-nav ul").append("<li>" + $("nav ul li:nth-last-child(2)").html() + "</li>" );
                $("header .expand-nav ul a").css({"color":"black","text-decoration":"none"});
                $("header .expand-nav ul li").hover(
                    function(){
                        $(this).find("a").css({"color":"white"});
                    },
                    function(){
                        $(this).find("a").css({"color":"black"});
                    }
                );
                $("nav ul li:nth-last-child(2)").remove();
            }
        }
        if(documentWidth <= 768){
            // close running events on click outside define area
            $(document).mouseup(function(e) 
            {
                var container = $("header .search-box input");
                // if the target of the click isn't the container nor a descendant of the container
                if (!container.is(e.target) && container.has(e.target).length === 0) 
                {
                    container.hide();
                }
            });  
         }
    }); 

    // media query
    if($(document).width() <= 991 ){
        $("nav ul li" ).each(function( index ) {
            if( $("nav ul li:nth-last-child(2)").html() != undefined){
                $("header .expand-nav ul").append("<li>" + $("nav ul li:nth-last-child(2)").html() + "</li>" );
                $("nav ul li:not('.more-list')").last().remove();
            }
        });
    }

    // media query 
    $(window).resize(function() { 
        if($(document).width() <= 991 ){
            $("nav ul li" ).each(function( index ) {
                if( $("nav ul li:nth-last-child(2)").html() != undefined){
                    $("header .expand-nav ul").append("<li>" + $("nav ul li:nth-last-child(2)").html() + "</li>" );
                    $("nav ul li:not('.more-list')").last().remove();
                    $("header .expand-nav ul a").css({"color":"black","text-decoration":"none"});
                    $("header .expand-nav ul li").hover(
                        function(){
                            $(this).find("a").css({"color":"white"});
                        },
                        function(){
                            $(this).find("a").css({"color":"black"});
                        }
                    );
                }
            });
           
        }else{
            for(var i = 1; i <= $("header .expand-nav ul li").length-4; i++){
                $("nav ul li").last().before("<li>" + $("header .expand-nav ul li").last().html() + "</li>" );
                $("header .expand-nav ul li").last().remove();
                $("nav ul li a").css({"color":"white"});
        
                if($("header").hasClass("active")){
                    $("header nav ul a").css({"color":"black"});
                }
            }
        }
    });
});