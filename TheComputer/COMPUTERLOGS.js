function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var on = true;

function toggle() {
	if (on) { fadeOut(); } else { fadeIn(); }
	on = !on;
}

function fadeOut(){
	document.getElementById("myDIV").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("myDIV").style.opacity = 0;
}

function fadeIn(){
	document.getElementById("myDIV").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("myDIV").style.opacity = 1;
}
