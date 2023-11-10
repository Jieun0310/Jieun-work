$(function(){
    // small banner slide
    setInterval(function(){
        $('.small_banner').animate({left:'-100%'},function(){
            $('.small_banner li').first().appendTo('.small_banner')
            $(this).css('left', 0)
    })},4000)

    // 메뉴
    $('.sub_gnb').hover(
        function(){
            $(this).find('ul').stop().slideDown()
        },
        function(){
            $(this).find('ul').stop().slideUp()
        },
    )

    // card page slide
     var slide = $('.slide')
    var current = 0

    slide.eq(current).show()

    setInterval(function(){
        var next = (current + 1) % slide.length

        slide.eq(current).fadeOut()
        slide.eq(next).fadeIn()
        current = next
    },4000)
    
})





