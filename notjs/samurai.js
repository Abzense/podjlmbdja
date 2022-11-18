// JavaScript Document
console.log("Testing testing, 1 2, 1 2.");

var Delay = 0;

var canAttack = false;

var Attack = false;

var Delay2 = 500;

var isEnd = false;

var disableSpace = true;

const waiting = console.log("waiting has been declared");
// False == Kirby, True == Dedede
var whoWin = false;

function generateDelay1(){
	Delay = Math.floor(Math.random() * 15) * 1000;
	if (Delay < 5000){
		Delay = Delay + 7000;
	}
}

document.addEventListener('keydown', function(){
	if (event.keyCode == 32 & disableSpace == false){
		if(canAttack == true){
			Attack = true;
		}
	
		else{
			Early();
		}
	}
});

function Reset(isEnd, Who){
	canAttack = false;
	Attack = false;
	
	document.getElementById('Easy').classList.remove('hide');
	document.getElementById('Diff').classList.remove('hide');
	document.getElementById('ExDiff').classList.remove('hide');
	document.getElementById('tut').classList.remove('hide');
	document.getElementById('tut2').classList.remove('hide');
	document.getElementById('music').muted = true;
	document.getElementById('winner').classList.add('hide');
	disableSpace = true;
	if(isEnd){
		if (whoWin){
			document.getElementById('kirby').classList.remove('hide');
		}
		else{
			document.getElementById('dede').classList.remove('hide');
		}
	}
	
}

function whoWon(){
	document.getElementById('sfxAttack').play();
	isEnd = true;
	document.getElementById('dedeGo').classList.add('hide');
	document.getElementById('kirbyGo').classList.add('hide');
	if(Attack == true){
		whoWin = false;
		document.getElementById('dede').classList.add('hide');
		document.getElementById('winner').innerHTML = "You Won!";
	}
	else{
		whoWin = true;
		document.getElementById('kirby').classList.add('hide');
		document.getElementById('winner').innerHTML = "Dedede Won!";
	}
	document.getElementById('winner').classList.remove('hide');
	setTimeout(Reset, 2000, true);
}

function Go(){
	document.getElementById('sfxGo').play();
	document.getElementById('dedeGo').classList.remove('hide');
	document.getElementById('kirbyGo').classList.remove('hide');
	canAttack = true;
	setTimeout(whoWon, Delay2);
}

function Begin(){
	generateDelay1();
	document.getElementById('Easy').classList.add('hide');
	document.getElementById('Diff').classList.add('hide');
	document.getElementById('ExDiff').classList.add('hide');
	document.getElementById('tut').classList.add('hide');
	document.getElementById('tut2').classList.add('hide');
	document.getElementById('music').currentTime = 0;
	document.getElementById('music').play();
	document.getElementById('music').muted = false;
	disableSpace = false;
	Waiting = setTimeout(Go, Delay);
	console.log("Waiting");
}

function Early(){
	clearTimeout(Waiting);
	document.getElementById('sfxNope').play();
	document.getElementById('winner').innerHTML = "Too Early!";
	document.getElementById('winner').classList.remove("hide");
	setTimeout(Reset, 2000, false);
	disableSpace = true;
}