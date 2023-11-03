$(function(){
    // small banner slide
    setInterval(function(){
        $('.small_banner').animate({left:'-100%'},function(){
            $('.small_banner li').first().appendTo('.small_banner')
            $(this).css('left', 0)
    })},4000)

})