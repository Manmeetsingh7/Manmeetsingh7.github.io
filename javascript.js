let number;
let attempts;

function startGame() {
    number = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("tries").textContent = "";
    document.getElementById("again").style.display = "none";
}

function check() {
    let guess = Number(document.getElementById("guess").value);
    attempts++;

    if (guess === number) {
        document.getElementById("result").textContent =
            "Congratulations! You guessed the number in " + attempts + " attempts!";

        document.getElementById("again").style.display = "inline-block";
    }
    else if (guess < number) {
        document.getElementById("result").textContent = "Too low! Try again.";
    }
    else {
        document.getElementById("result").textContent = "Too high! Try again.";
    }

    document.getElementById("tries").textContent = "Attempts: " + attempts;
}

function reset() {
    startGame();
    document.getElementById("guess").value = "";
}

startGame();
