 //Global variable set in 2 days
 var secs = 172799;
 
 //Function time down seconds in 1
 function timer() {	
	
	//Getting days according to number of hours/minutes/seconds
	var days = Math.floor(secs / 24 / 60 / 60);
	//Calculating hours left
	var hrsLeft = Math.floor((secs) - (days * 86400));
	//Getting hours according to number of hours-left/36000 (seconds per hour)
	var hours = Math.floor(hrsLeft / 3600);
	//Calculating minutes left
	var minsLeft = Math.floor((hrsLeft) - (hours * 3600));
	//Getting minutes according to number of minutes-left /60 (second per minute)
	var mins = Math.floor(minsLeft / 60);
	//Getting remaining seconds
	var remaining = secs % 60;
	
	//Assigning every variable to their component
	document.getElementById('days').innerHTML = days
	document.getElementById('hours').innerHTML = hours
	document.getElementById('minutes').innerHTML = mins
	document.getElementById('seconds').innerHTML = remaining;
	
	//Substracting by 1
	secs--;
	
}

//Calling the function timer ever second
var countdownTimer = setInterval('timer()', 1000); 

