var correctNumber = Math.floor((Math.random() * 100) + 1);
console.log("The correct number is: "+correctNumber);


$(document).ready(function(){
    var guessNumber = 1;

    $("#submit").on("click", function(){
        var guess = +$("#guess").val();
        console.log("The guess is: "+guess)
    });
});
