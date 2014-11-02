$(document).ready(function(){
    var guessNumber = 1;

    $("#submit").on("click", function(){
        var guess = +$("#guess").val();
        console.log(guess)
    });
});
