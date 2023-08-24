$(document).ready(function(){
        // chang background header
        $(window).on('scroll',function(){
            if($(window).scrollTop() > 10){
                $('.home .header').css({'backgroundColor': 'rgb(61 64 91)'})
            }else{
                $('.home .header').css({'backgroundColor': 'transparent'})
            }
        })
        // ##########################
        // hover on dropdown
        $('.icon-drop , .dropsown-1').on({
            mouseenter: function(){$('.dropdown-1').animate({'top':'35px', 'opacity': '1', },200).show()},
            mouseleave: function(){$('.dropdown-1').animate({'top':'65px', 'opacity': '0', },200).hide(0)}
        })
        // ##########################
        // animate icon bar
        $('.bar-icon').on('click',function(){
            var bar1 = $(".bar-icon .bar-1")
            var bar2 = $(".bar-icon .bar-2")
            var bar3 = $(".bar-icon .bar-3")
            if($(".bar-icon").hasClass('collapsed')){
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(-8px)",'rotate':"0deg"})})
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(0px)"})})
                bar2.animate({"width":"30px"},function(){bar2.css({"opacity":"1"})})
                bar1.animate({"width":"30px"},function(){bar1.css({'rotate':"0deg","transform":"translateY(8px)"})})
                bar1.animate({"width":"30px"},function(){bar1.css({"transform":"translateY(0px)"})});
            }
            else{
                bar1.animate({"width":"30px"},function(){bar1.css({"transform":"translateY(8px)"})});
                bar1.animate({"width":"30px"},function(){bar1.css({'rotate':"45deg","transform":"translateY(-4px)"})})
                bar2.animate({"width":"30px"},function(){bar2.css({"opacity":"0"})})
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(-8px)"})})
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(4px)",'rotate':"-45deg"})})
            }
        })
        // ##########################
        // dinamic color tr in table
        var countTr = $("table tr").length
        for(i = 2; i < countTr; i+= 2 ){
            $("table tr").eq(i).css({
                'backgroundColor':'#F4F1DE'
            })
        }
        // ##########################
                // trnsition form on contact
                $(".form input, .form textarea").on({
                    focus: function(){ $(this).siblings().css({'top': '30px','fontSize':'14px',"color":'#717275'})},
                    blur: function(){ $(this).siblings().css({'top': '39px','fontSize':'16px',"color":'#000'})}
                })
        // ##########################
                    // cahnge active links at scrolling 
        $(window).on('scroll',function(){
            if($(window).scrollTop()> $('#home').offset().top - 1){
                $(".my-list a").removeClass('active-color-text')
                $('.my-list a[href="#home"]').addClass("active-color-text")
            }
            if($(window).scrollTop()> $('#about').offset().top - 1){
                $(".my-list a").removeClass('active-color-text')
                $('.my-list a[href="#about"]').addClass("active-color-text")
            }
            if($(window).scrollTop()> $('#membership').offset().top - 1){
                $(".my-list a").removeClass('active-color-text')
                $('.my-list a[href="#membership"]').addClass("active-color-text")
            }
            if($(window).scrollTop()> $('#events').offset().top - 1){
                $(".my-list a").removeClass('active-color-text')
                $('.my-list a[href="#events"]').addClass("active-color-text")
            }
            if($(window).scrollTop()> $('#contact').offset().top - 1){
                $(".my-list a").removeClass('active-color-text')
                $('.my-list a[href="#contact"]').addClass("active-color-text")
            }
        })
        // ##########################
        // fixed-menu overlay and show & hide
            $(".login-btn").on("click", function(){
                $(".fixed-menu").css({'right':'0'})
            })
            $(".closed").on("click", function(){
                $(".fixed-menu").css({'right':'-120%'})
                $('body .overlay-2').hide()
            })
        var overlay = $("<div class='overlay-2'></div>")
        $('.login-btn').on("click",function(){
            $('body').prepend(overlay)
            $('body .overlay-2').show()
        })
        $(overlay).on("click",function(){
            $('body .overlay-2').hide()
            $('.fixed-menu').css({"right":'-120%'})
        })
        
})