$(document).ready(function(){
    var userGuess = 0;
    $("#submit").on("submit", function(){
        var input = +$(this).val();
        console.log(input)
    });

});
