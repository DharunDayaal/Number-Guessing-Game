const ranndomNumber = Math.floor(Math.random() * 10 + 1);

let guesses = 0;
document.getElementById("submitBtn").onclick = function(){
    let getNumber = document.getElementById("guess-number").value;
    getNumber = Number(getNumber);

    let noGuess = document.getElementById("noGuess");

    if(getNumber != ranndomNumber){
        noGuess.innerHTML = getNumber + " is not the Number Keep trying!!!";
        guesses++;
    }
    else {
        document.getElementById("result").innerHTML = `Congrats! you Guessed the number ${ranndomNumber}`;
    }
}

if(guesses > 3){
    alert("You are doing great continue!");
}