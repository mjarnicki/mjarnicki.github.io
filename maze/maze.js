
//wybór liczby życ	
	var lifes = 0;
	document.getElementById("start").addEventListener("click", LifeCounter)
	function LifeCounter()
	{
		var i = 0;
		for (i=0; i<=4; i++)
		{
		if(document.getElementsByName("lifes")[i].checked == true)
		{
		lifes = document.getElementsByName("lifes")[i].value;
		document.getElementById("counter").innerHTML = "liczba żyć: " + lifes;
		break;
		}
		}
	}
	
//znikanie ekranu startowego po naciśnięciu zielonego prostokąta

	document.getElementById("start").addEventListener("click", start)
	function start()
	{
	document.getElementById("setup").style.display = "none";
	}
//odejmowanie życ po wyjsciu za linię	
	function fail()
	{
		var fail = lifes-=1
		document.getElementById("counter").innerHTML = "liczba żyć: " + fail;
		
		if (lifes <=0)
		{
		document.getElementById("lost").style.display = "initial";
		stop()
		}
	}

//pojawienie się ekranu zwyciestwa
	document.getElementById("finish").addEventListener("mouseover", win)
	function win()
	{
		document.getElementById("win").style.display = "initial";
	}
	document.getElementById("restart2").addEventListener("click", reload)
	document.getElementById("restart").addEventListener("click", reload)
	function reload()
	{
		 location.reload();
	}
	
//sekundnik
	document.getElementById("start").addEventListener("click", timerStart)
	document.getElementById("finish").addEventListener("mouseover", stop)
	var i=0;

	function timerStart()
	{
		clock = setInterval(function(){timer()}, 1000);
	}
	function timer()
	{
		i++;
		var tenSec = Math.floor(i/10);
		var min = Math.floor(i/60);
		var time = "0" + min + ":" + (tenSec-(min*6)) + (i-(tenSec*10));
		document.getElementById("time").innerHTML = time;
	}
	function stop()
	{
		clearInterval(clock);
	}

	//poniżej funkcje tworzące labirynt
	
	var los1 = (Math.floor(Math.random() * 340)) + 20;
	var los2 = Math.floor(Math.random() * 380);
	var los3 = Math.floor(Math.random() * 380);
	var los4 = Math.floor(Math.random() * 380);
	var los5 = Math.floor(Math.random() * 380);
	var los6 = Math.floor(Math.random() * 380);
	var los7 = Math.floor(Math.random() * 380);
	var los8 = (Math.floor(Math.random() * 340)) + 20;
	
	window.addEventListener("load", los);
	function los()
{ 
	document.getElementById("start").style.top = (los1 - 20) + "px";
	
	document.getElementById("box1a").style.height = los1 + "px";
	document.getElementById("box1b").style.height = (380 - los1) + "px";

	document.getElementById("box2a").style.height = los2 + "px";
	document.getElementById("box2b").style.height = (380 - los2) + "px";
	
	document.getElementById("box3a").style.height = los3 + "px";
	document.getElementById("box3b").style.height = (380 - los3) + "px";
	
	document.getElementById("box4a").style.height = los4 + "px";
	document.getElementById("box4b").style.height = (380 - los4) + "px";
	
	document.getElementById("box5a").style.height = los5 + "px";
	document.getElementById("box5b").style.height = (380 - los5) + "px";
	
	document.getElementById("box6a").style.height = los6 + "px";
	document.getElementById("box6b").style.height = (380 - los6) + "px";
	
	document.getElementById("box7a").style.height = los7 + "px";
	document.getElementById("box7b").style.height = (380 - los7) + "px";
	
	document.getElementById("box8a").style.height = los8 + "px";
	document.getElementById("box8b").style.height = (380 - los8) + "px";
	
	document.getElementById("finish").style.top = (los8 - 20) + "px";
}
	window.addEventListener("load", if1); function if1()
	{ if (los1>los2){
			document.getElementById("box1Top").style.height = los2 + "px";
			document.getElementById("box1Bottom").style.height = (380 - los1) + "px";}
	else if (los1<los2)	{
			document.getElementById("box1Top").style.height = los1 + "px";
			document.getElementById("box1Bottom").style.height = (380 - los2) + "px";}}
			
	window.addEventListener("load", if2); 	function if2()
	{ if (los2>los3) {
			document.getElementById("box2Top").style.height = los3 + "px";
			document.getElementById("box2Bottom").style.height = (380 - los2) + "px"; }
	else if (los2<los3){
			document.getElementById("box2Top").style.height = los2 + "px";
			document.getElementById("box2Bottom").style.height = (380 - los3) + "px";}}
			
	window.addEventListener("load", if3); 	function if3()
	{ if (los3>los4) {
			document.getElementById("box3Top").style.height = los4 + "px";
			document.getElementById("box3Bottom").style.height = (380 - los3) + "px"; }
	else if (los3<los4){
			document.getElementById("box3Top").style.height = los3 + "px";
			document.getElementById("box3Bottom").style.height = (380 - los4) + "px";}}
	
	window.addEventListener("load", if4); 	function if4()
	{ if (los4>los5) {
			document.getElementById("box4Top").style.height = los5 + "px";
			document.getElementById("box4Bottom").style.height = (380 - los4) + "px"; }
	else if (los4<los5){
			document.getElementById("box4Top").style.height = los4 + "px";
			document.getElementById("box4Bottom").style.height = (380 - los5) + "px";}}
	
	window.addEventListener("load", if5); 	function if5()
	{ if (los5>los6) {
			document.getElementById("box5Top").style.height = los6 + "px";
			document.getElementById("box5Bottom").style.height = (380 - los5) + "px"; }
	else if (los5<los6){
			document.getElementById("box5Top").style.height = los5 + "px";
			document.getElementById("box5Bottom").style.height = (380 - los6) + "px";}}

	window.addEventListener("load", if6); 	function if6()
	{ if (los6>los7) {
			document.getElementById("box6Top").style.height = los7 + "px";
			document.getElementById("box6Bottom").style.height = (380 - los6) + "px"; }
	else if (los6<los7){
			document.getElementById("box6Top").style.height = los6 + "px";
			document.getElementById("box6Bottom").style.height = (380 - los7) + "px";}}
	
	window.addEventListener("load", if7); 	function if7()
	{ if (los7>los8) {
			document.getElementById("box7Top").style.height = los8 + "px";
			document.getElementById("box7Bottom").style.height = (380 - los7) + "px"; }
	else if (los7<los8){
			document.getElementById("box7Top").style.height = los7 + "px";
			document.getElementById("box7Bottom").style.height = (380 - los8) + "px";}}
	
	
