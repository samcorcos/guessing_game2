var correctNumber = Math.floor((Math.random() * 100) + 1);
console.log("The correct number is: " + correctNumber);

function isRepeat(x, array) {
    for (i=0; i<array.length; i++) {
        if (array[i] == x) {
            return true;
        }
    }
}

$(document).ready(function(){
    var guessNumber = 0;
    var guessList = [];


    $("#submit").on("click", function(){
        var guess = $("#guess").val();
        console.log("The guess is: " + guess)

        // first thing to do is test if you inputted a number and that it's between 1-100
        // if not, throw an error. It also needs to be within the acceptable range

        // then we need to test if the number has already been used
        var repeat = isRepeat(guess, guessList);
        if (repeat == true) {
            return alert("ERROR: You've already submitted this number.");
        }

        // if the number meets all the criteria and hasnt been used, add it to the list of guesses
        guessList.push(guess);

        // hot or cold - if its more than 25 away, it's cold; 10-25 is warm; <10 is hot
        if (Math.abs(correctNumber - guess) > 25) {
            console.log("youre cold")
            // print "you're cold!"
            // and change the background to dark blue
        } else if (Math.abs(correctNumber - guess) <= 25 && (Math.abs(correctNumber - guess) > 10)) {
            console.log("youre warm")
            // print "youre warm!"
            // and change the background color to something warm
        } else if (Math.abs(correctNumber - guess) <= 10 && (Math.abs(correctNumber - guess) > 0)) {
            console.log("youre hot")
            // print "youre hot!"
            // and change the background to hellfire
        } else {
            return alert("You got it!")
            //you got hte right answer
        }
        console.log("You have " + (5-guessNumber) +" guesses remaining.")
        guessNumber++;
        if (guessNumber > 5) {
            // change a variable on top to false, and make it so the program doesnt run if it's false (similar to the "once" function)
            // and allows the user to reset the game after they fail
        }

        console.log(guessList);

    // reset the value to "empty" in the input box after it runs


    // once the person loses the game, a new button should pop up that was previously hidden
    // this button will use location.reload() to force a refresh of the page so the player can go again.
    // also create a button that gives them the answer after they lose

    });

    $("#reset").on("click", function() {
        location.reload();
        alert("The game has been reset!")
    });


});
