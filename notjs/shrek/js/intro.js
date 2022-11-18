// Setting up global variables first
var EnemyHealth = 100;
var Damage = 1;

// The one function that does everything. First we subtract Damage from EnemyHealth, and if it's 0 or below, update the image and text accordingly.
function TakeDamage () {
	EnemyHealth = EnemyHealth - Damage;
	if (EnemyHealth < 1){
		EnemyHealth = 0;
		document.getElementById('Shrek').src="images/shrekded.png";
		document.getElementById('ShrekText').innerHTML="Yay! You defeated the evil Shrek. The country is now in your debt."
	}
	else{
		document.getElementById('Shrek').src="images/shrek.png";
		document.getElementById('ShrekText').innerHTML="Oh No! A Shrek is blocking the way! Pick a weapon and fight him!"
	}
	document.getElementById('EHealth').innerHTML = EnemyHealth;
	return EnemyHealth;
}