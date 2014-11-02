$(document).ready(function(){
    var userGuess = 0;

    $("#submit").on("click", function(){
        var guess = +$("#guess").val();
        console.log(guess)
    });
});
