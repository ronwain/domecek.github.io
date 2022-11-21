console.log("moc nečum");
/*
document.getElementById('btn-modal').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('modal').classList.add('is-visible');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });
  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });




// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Get the modal
var ebModal = document.getElementById('mySizeChartModal');

// Get the button that opens the modal
var ebBtn = document.getElementById("mySizeChart");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];

// When the user clicks the button, open the modal 
ebBtn.onclick = function() {
    ebModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}

*/


//Slucahtka
// 
var ebModalSluchatka = document.getElementById('mySizeChartModal-sluchatka');

// Get the button that opens the modal
var ebBtnSluchatka = document.getElementById("mySizeChart-sluchatka");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close1")[0];

// When the user clicks the button, open the modal 
ebBtnSluchatka.onclick = function() {
    ebModalSluchatka.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModalSluchatka.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModalSluchatka) {
      ebModalSluchatka.style.display = "none";
    }
}

//Štěnice
// 
var ebModalStenice = document.getElementById('mySizeChartModal-stenice');

// Get the button that opens the modal
var ebBtnStenice = document.getElementById("mySizeChart-stenice");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close2")[0];

// When the user clicks the button, open the modal 
ebBtnStenice.onclick = function() {
    ebModalStenice.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModalStenice.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModalStenice) {
      ebModalStenice.style.display = "none";
    }
}




// Kočka 
var ebModal = document.getElementById('mySizeChartModal');

// Get the button that opens the modal
var ebBtn = document.getElementById("mySizeChart");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];

// When the user clicks the button, open the modal 
ebBtn.onclick = function() {
    ebModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}


// Ne-button 
var ebModalKyta = document.getElementById('mySizeChartModal-kytarista');

// Get the button that opens the modal
var ebBtnKyta = document.getElementById("mySizeChart-kytarista");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close8")[0];

// When the user clicks the button, open the modal 
ebBtnKyta.onclick = function() {
    ebModalKyta.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModalKyta.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModalKyta) {
      ebModalKyta.style.display = "none";
    }
}





/*počítání*/

var counter=0;
function count()
{
  $('.show').addClass("notification");
            $(".show").html(counter);
}
 $('.btn').on('click', increaseCount);
 
function increaseCount(){
      counter++
      count();
      // Job done, now disconnect this button from this event handler
      $(this).off("click", increaseCount);  
      $(this).addClass("disabled"); // For visual clue that button no longer works
 }



 
 
