console.log("koupelna")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('koupelna-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("koupelna-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("koupelna--hint")[0];

// When the user clicks the button, open the modal 
btnHintLoz.onclick = function() {
  modalHintLoz.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanHintLoz.onclick = function() {
    modalHintLoz.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalHintLoz) {
      modalHintLoz.style.display = "none";
    }
}







//Modaly Koupelna
// Karma
var ebModal1 = document.getElementById('koupelna--modal_karma');

// Get the button that opens the modal
var ebBtn1 = document.getElementById("koupelna--link_karma");

// Get the <span> element that closes the modal
var ebSpan1 = document.getElementsByClassName("koupelna--modal_karma")[0];

// When the user clicks the button, open the modal 
ebBtn1.onclick = function() {
    ebModal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan1.onclick = function() {
    ebModal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal1) {
        ebModal1.style.display = "none";
    }
}

// Vana
var ebModal2 = document.getElementById('koupelna--modal_vana');
var ebBtn2 = document.getElementById("koupelna--link_vana");
var ebSpan2 = document.getElementsByClassName("koupelna--modal_vana")[0];


ebBtn2.onclick = function() {
    ebModal2.style.display = "block";
}
ebSpan2.onclick = function() {
    ebModal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal2) {
        ebModal2.style.display = "none";
    }
}

// Plisen
var ebModal3 = document.getElementById('koupelna--modal_plisen');
var ebBtn3 = document.getElementById("koupelna--link_plisen");
var ebSpan3 = document.getElementsByClassName("koupelna--modal_plisen")[0];


ebBtn3.onclick = function() {
    ebModal3.style.display = "block";
}
ebSpan3.onclick = function() {
    ebModal3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal3) {
        ebModal3.style.display = "none";
    }
}



/*počítání*/


var clicks = 0
function clickME(event) {
  clicks += 1

  document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case

  console.log(clicks)

  if(clicks == 3) {
   document.getElementById('gohome').style.display = 'block'; 
   document.getElementById('zmiz').style.display = 'none';
   document.getElementById('koupelna-hint').style.display = 'none';
   localStorage.setItem("mistnost", "loznice")

} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(`a`) // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
