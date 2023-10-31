$(function(){

    $(document).ready(function() {
        $(".clickable").click(function() {
            // 클릭된 이미지를 가운데로 이동 및 확대
            $(this).addClass("centered").parent().css("width", "330px");
    
            // 나머지 이미지 크기를 복구하고 이동
            $(".clickable").not(this).removeClass("centered").parent().css("width", "330px");
        });
    });

})