$(document).ready(function () {
    //Load when document is ready
    var randomNumber;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var wins = 0;
    var losses = 0;
    var score = 0;

    // Resets Score
    function resetRNG() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        console.log("Random Number is: " + randomNumber);
    }

    // Resets crystal values
    function resetCrystals() {
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        console.log("Crystals Reset, || 1: " + crystal1 + " || 2: " + crystal2 + " || 3: " + crystal3 + " || 4: " + crystal4);
    }

    // Resets game parameters
    function resetGame() {
        resetRNG();
        resetCrystals();
        score = 0;
        $("#score").text(score);
        $("#randomNumber").text(randomNumber);
    }

    // Checks win or loss conditions
    function checkWin() {
        if (score == randomNumber) {
            wins++
            $("#wins").text(wins);
            console.log("Win");
            resetGame();
        } else if (score > randomNumber) {
            losses++
            $("#losses").text(losses);
            console.log("Losses");
            resetGame();
        }
    }

    // Set inital game parameters
    resetGame();

    // Crystal click, updates score
    $("#crystal1").click(function(){
        score = score + crystal1;
        $("#score").text(score);
        checkWin();
        console.log("Crystal 1 clicked");
    });

    $("#crystal2").click(function(){
        score = score + crystal2;
        $("#score").text(score);
        checkWin();
        console.log("Crystal 2 clicked");
    });

    $("#crystal3").click(function(){
        score = score + crystal3;
        $("#score").text(score);
        checkWin();
        console.log("Crystal 3 clicked");
    });

    $("#crystal4").click(function(){
        score = score + crystal4;
        $("#score").text(score);
        checkWin();
        console.log("Crystal 4 clicked");
    });

});