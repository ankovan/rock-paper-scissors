let rock;
let scissors;
let paper;
let action;
let hand;
let userScore;
let aiScore;
const handMods = [
  ['hand', 'right', 'fas',`fa-hand-rock`,],
  ['hand', 'right', 'fas',`fa-hand-scissors`],
  ['hand', 'right', 'fas',`fa-hand-paper`],
];
const aiHandModes = ["rock", "scissors", "paper"];
window.addEventListener('load', ()=> {
  rock = document.querySelector('.rock');
  scissors = document.querySelector('.scissors');
  paper = document.querySelector('.paper');
  action = document.querySelector('.action');
  userScore = document.querySelector('#main-score');
  userScore.innerHTML = 0;
  aiScore = document.querySelector('#ai-score');
  aiScore.innerHTML = 0;
});  
function clickAction(handMode){
  const mainHand = document.getElementById("main-hand");
  mainHand.classList = [];
  mainHand.classList.add('hand', 'left', 'fas',`fa-hand-${handMode}`);
  const rand_index = Math.floor(Math.random()*handMods.length);
  const AIHand = document.getElementById('ai-hand');
  AIHand.classList = [];
  AIHand.classList.add(...handMods[rand_index]);
  computeScores(handMode, aiHandModes[rand_index]);
}
function computeScores(userHandMode, aiHandMode){
  if (userHandMode == aiHandMode) {
    return;
  }
  if (userHandMode == "rock" && aiHandMode == "scissors" || userHandMode == "scissors" && aiHandMode == "paper" || userHandMode == "paper" && aiHandMode == "rock"){
    userScore.innerHTML++
  }
  if (aiHandMode == "rock" && userHandMode == "scissors" || aiHandMode == "scissors" && userHandMode == "paper" || aiHandMode == "paper" && userHandMode == "rock"){
    aiScore.innerHTML++
  }
}