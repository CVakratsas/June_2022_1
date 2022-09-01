'use strict'

let left_score = 0;
let right_score = 0;
let someone_won = false;

function add_left() {
    let btn = document.querySelector("#left-score");
    left_score ++;
    btn.innerHTML = left_score;
    check();
}

function add_right() {
    let btn = document.querySelector("#right-score");
    right_score ++;
    btn.innerHTML = right_score;
    check();
}

function check() {
    if (someone_won===false) {
        let message = document.getElementById("winning-message");
        if (left_score===5) {
            someone_won = true;
            message.innerHTML = "Ο πρώτος παίκτης κέρδισε!"
            message.style.visibility = "visible";
        }
        else if (right_score === 5) {
            someone_won = true;
            message.innerHTML = "Ο δεύτερος παίκτης κέρδισε!"
            message.style.visibility = "visible";
        }
    }
}