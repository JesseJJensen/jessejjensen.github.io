const player = {
  currentChoice: null
};
const computer = {
  currentChoice: null
};

  // computer choice after button click
  function buttonClick(e) {
  const choices = ["lapis", "papyrus", "scalpellus"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];

  //Converts id to index
  if (e.target.id === "lapis") {
    player.currentChoice = choices[0];
  } else if (e.target.id === "papyrus") {
    player.currentChoice = choices[1];
  } else {
    player.currentChoice = choices[2];
  }

  // Tests for a tie
  if (computer.currentChoice === player.currentChoice) {
    document.getElementById("results").innerText =
      "The player and the computer both chose " + computer.currentChoice;
  }

  // If no tie happens then the code below will execute and determine the winner
  else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
      document.getElementById("results").innerText = "The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    } else {
      document.getElementById("results").innerText = "The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    }
  } else if (computer.currentChoice === choices[1]) {
    if (player.currentChoice === choices[2]) {
      document.getElementById("results").innerText = "The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    } else {
      document.getElementById("results").innerText = "The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    }
  } else if (computer.currentChoice === choices[2]) {
    document.getElementById("results").innerText = "The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
  } else {
    document.getElementById("results").innerText = "The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
  }
}

//Click event handlers

document.getElementById("lapis").addEventListener("click", buttonClick);
document.getElementById("papyrus").addEventListener("click", buttonClick);
document.getElementById("scalpellus").addEventListener("click", buttonClick);


//===========
// Counter
//===========


// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});