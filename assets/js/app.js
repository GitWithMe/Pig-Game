var scores, roundscores, activeplayers

init();

document.querySelector(".btn-roll").addEventListener("click", function(){
  var dice = Math.floor(Math.random() * 6) + 1; 
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice +".png";

  if(dice !== 1){
  	roundscores += dice;
  	document.getElementById('current-' + activeplayers).textContent = roundscores;
  	}
  	else{
  	nextPlayer();
  	}

});

document.querySelector('.btn-hold').addEventListener('click',function(){
scores[activeplayers] += roundscores;
document.querySelector('#score-'+activeplayers).textContent = scores[activeplayers];

if(scores[activeplayers]>=20){
	document.querySelector('#name-'+activeplayers).textContent= "Victory Royale!";
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.player-' +activeplayers +'-panel').classList.add('winner');
	document.querySelector('.player-' +activeplayers +'-panel').classList.remove('active');
}
else{
	nextPlayer();
}

});


function nextPlayer(){
	activeplayers === 0 ? activeplayers = 1 : activeplayers = 0;
  		roundscores = 0;
  		document.getElementById("current-0").textContent = '0';
        document.getElementById("current-1").textContent = '0';

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

}

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
	scores = [0,0];
roundscores = 0;
activeplayers = 0;

document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

}
