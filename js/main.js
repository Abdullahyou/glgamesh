$(function(){
    'use strict';

    // menu hover
     $('.menu li').hover(function(){
        $(this).css({
            background:"#FFF",
            color:"var(--main-background)",
        });
         
     });
    $('.menu li').mouseleave(function(){
        $(this).css({
            background:"var(--main-background)",
            color:"#FFF",
        });
         
     });
});