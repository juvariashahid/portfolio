// Get the modal
var modalStutter = document.getElementById("myStutterModal");
var modalBOA= document.getElementById("myBOAModal");
var modalOptimalex= document.getElementById("myOptimalexModal");

var modalTime = document.getElementById("myTimeModal");
var modalHomophily = document.getElementById("myHomophilyModal");

var modalDrop = document.getElementById("myDropModal");

var modalWeb = document.getElementById("myWebModal");
var modalPython = document.getElementById("myPythonModal");
var modalAOE = document.getElementById("myAOEModal");


// Get the button that opens the modal
var btnStutter = document.getElementById("myStutter");
var btnBOA = document.getElementById("myBOA");
var btnOptimalex = document.getElementById("myOptimalex");

var btnTime = document.getElementById("myTime");
var btnHomophily = document.getElementById("myHomophily");
var btnDrop = document.getElementById("myDrop");
var btnWeb = document.getElementById("myWeb");
var btnPython = document.getElementById("myPython");
var btnAOE= document.getElementById("myAOE");
var closeStutter = document.getElementById("cS");
var closeTime = document.getElementById("cT");
var closeHomophily = document.getElementById("cH");
var closeDrop = document.getElementById("cD");
var closeWeb = document.getElementById("cW");
var closePython = document.getElementById("cP");
var closeAOE = document.getElementById("cA");
var closeBOA = document.getElementById("cBOA");
var closeOptimalex = document.getElementById("cO");



// console.log(closeStutter);
// var allModals= [];


// Get the <span> element that closes the modal
// var span = document.querySelectorAll("close");

// When the user clicks the button, open the modal 
btnStutter.onclick = function() {
  modalStutter.style.display = "block";
  console.log("HELLO")

  
}

btnOptimalex.onclick = function() {
  modalOptimalex.style.display = "block";

  
}

btnBOA.onclick = function() {
  modalBOA.style.display = "block";
}

btnTime.onclick = function() {
  modalTime.style.display = "block";
  
}

btnHomophily.onclick = function() {
  modalHomophily.style.display = "block";
  console.log("HELLO")
  
}

btnDrop.onclick = function() {
  modalDrop.style.display = "block";
  
}

btnWeb.onclick = function() {
  modalWeb.style.display = "block";
  
}

btnPython.onclick = function() {
  modalPython.style.display = "block";
  
}

btnAOE.onclick = function() {
  modalAOE.style.display = "block";
  
}


// When the user clicks on <span> (x), close the modal
closeStutter.onclick = function() {
  modalStutter.style.display = "none";
}

closeTime.onclick = function() {
  modalTime.style.display = "none";
}


closeHomophily.onclick = function() {
  modalHomophily.style.display = "none";
}

closeDrop.onclick = function() {
  modalDrop.style.display = "none";
}

closeWeb.onclick = function() {
  modalWeb.style.display = "none";
}
closePython.onclick = function() {
  modalPython.style.display = "none";
}

closeAOE.onclick = function() {
  modalAOE.style.display = "none";
}

closeBOA.onclick = function() {
  modalBOA.style.display = "none";
}

closeOptimalex.onclick = function() {
  modalOptimalex.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// 	var modal;
// 	for(modal of allModals){
// 		if (event.target == modal) {
// 		    modal.style.display = "none";
// 		  }
// 	}
  
// }