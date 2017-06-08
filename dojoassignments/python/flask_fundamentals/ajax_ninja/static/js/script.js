console.log('yo')

$(document).ready(function(){
    console.log("sup")

    $('li').on("click", function() {
        var $headerText = $(this).attr("text")
        $('#dynamic_text').html($headerText)
        console.log("yo again")
        var $atrib = $(this).attr("summon")
        console.log($atrib)
        $('#morphing_image').attr("src", $atrib) 
        console.log($('#morphing_image').attr("src"))



    });
});