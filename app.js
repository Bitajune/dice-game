let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    //This is an anonymous function. it does not have a name and cannot be used outside of this querySelector.
    // 1. Get a random number
    let dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score and switch player
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add current score to global score
    scores[activePlayer] += roundScore;
    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game 
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
    };
    // Next player
    nextPlayer();
});

function nextPlayer() {
    //Toggle the player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    //Reset the current score to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Toggle HTML with actice player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //Take away dice after 1 is rolled
    document.querySelector('.dice').style.display = 'none';
};