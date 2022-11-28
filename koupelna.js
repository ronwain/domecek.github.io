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







//Modaly Ložnice
// Kočka 
var ebModal = document.getElementById('koupelna--modal_karma');
var ebBtn = document.getElementById("koupelna--link_karma");
var ebSpan = document.getElementsByClassName("koupelna--modal")[0];


ebBtn.onclick = function() {
    ebModal.style.display = "block";
}


ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}

