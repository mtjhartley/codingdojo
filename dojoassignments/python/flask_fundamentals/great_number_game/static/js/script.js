alert('yo')

$(document).ready(function() {


    $('button').on("click", function() {
        //get a response from the server when you click the button
        //get can either get the number itself and compare in js
        //or you can get your string of how close you are and apply
        //a class
        $.getJSON($SCRIPT_ROOT + '/guess', {
            string: $('text').val()
            console.log(string)
        }, function(data) {
            console.log(data)
            $("#how_close").text(data.result)
        })
    })


});