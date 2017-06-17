$(document).ready(function(){
    $('button').on("click", function() {
        $.get('/message', function(res){
            $('p').html(res);
        })
    })
})