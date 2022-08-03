// import functions and grab DOM elements
const firstAddButton = document.getElementById('first-team-add-button');
const firstSubtractButton = document.getElementById('first-team-subtract-button');
const secondAddButton = document.getElementById('second-team-add-button');
const secondSubtractButton = document.getElementById('second-team-subtract-button');
const firstTeamName = document.getElementById('first-input');
const secondTeamName = document.getElementById('second-input');

const activeGame = document.getElementById('active-game');
const pastGame = document.getElementById('past-games-container');


const teamButton = document.getElementById('add-team');
const finishGameButton = document.getElementById('finish-game-button');



// let state
let score1 = 0;
let score2 = 0;
let name1 = '';
let name2 = '';
// set event listeners

teamButton.addEventListener('click', () => {
  const teamOneName = firstTeamName.value;
  const teamTwoName = secondTeamName.value;
  console.log(teamOneName, teamTwoName)
})


finishGameButton.addEventListener('click', () => {

})



firstAddButton.addEventListener('click', () => {
  activeGame.textContent = '';
  score1++;
  const thisGame = renderGame(name1, name2, score1, score2);
  activeGame.append(thisGame);
  
});

firstSubtractButton.addEventListener('click', () => {
  activeGame.textContent = '';
  const thisGame = renderGame(name1, name2, score1, score2);
  activeGame.append(thisGame);
  score1--;
 });

secondAddButton.addEventListener('click', () => { 
  activeGame.textContent = '';
  const thisGame = renderGame(name1, name2, score1, score2);
  activeGame.append(thisGame);
  score2++;
});

secondSubtractButton.addEventListener('click', () => {
  activeGame.textContent = '';
  const thisGame = renderGame(name1, name2, score1, score2);
  activeGame.append(thisGame);
  score2--;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function renderGame(name1, score1, name2, score2) {
    const wholeGame = document.createElement('div');
    const teamOnePlace = displayAllPolls(name1, score1);
    const teamTwoPlace = displayAllPolls(name2, score2);
    wholeGame.append(teamOnePlace, teamTwoPlace);

    return wholeGame;
}

function displayAllPolls(name, score) {
    const teamContainer = document.createElement('div');
    const namePlace = document.createElement('p');
    const scorePlace = document.createElement('p');

    namePlace.textContent = name;
    scorePlace.textContent = score;

    teamContainer.append(namePlace, scorePlace);

    return teamContainer;
}

function clearPolls() {
  activeGame.textContent = '';
  let score1 = 0;
  let score2 = 0;
  let name1 = '';
  let name2 = '';
}