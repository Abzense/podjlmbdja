// JavaScript source code

console.log("Zack's Javascript is working");

var Chance = Math.floor(Math.random() * 100);

const Alternatives = ["Electronic Music Artist &#124; Computer Graphics Artist &#124; Mod/Game Developer &#124; Programmer &#124; Multi-Media Student", "Really wants a pizza right now.", "Technically it's Zachary, but I just go by Zack", "I creative work my host here for the see to world."];

function flavourText(){
	if(Chance < 4){
		if (document.getElementById('zw-flvT') != null & document.getElementById('zw-flvT') != undefined){
			document.getElementById('zw-flvT').innerHTML = Alternatives[Math.floor(Math.random() * Alternatives.length)];
		}
	}
}

window.onLoad = flavourText();