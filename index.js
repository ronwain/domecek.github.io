console.log("moc nečum");
/*
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

*/
// Ne-button 
var modalHintLoz = document.getElementById('loznice-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("loznice-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("loznice--hint")[0];

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





/*počítání*


 var clicks = 0
 function clickME(event) {
   clicks += 1
 
   document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case
 
   console.log(clicks)

   if(clicks == 3) {
    document.getElementById('gohome').style.display = 'block'; 

} else {
    document.getElementById('gohome').style.display = 'none';
}

 
 }
 
 document.querySelectorAll(`a`) // select all buttons
   .forEach( 
     el => el.addEventListener(`click`, clickME, {once: true})
   ) 

  
   
   
   /*

   const open_btn = document.querySelector('.open-btn')
   const close_btn = document.querySelector('.close-btn')
   const nav = document.querySelectorAll('.nav')
   
   open_btn.addEventListener('click', () => {
       nav.forEach(nav_el => nav_el.classList.add('visible'))
   })
   
   close_btn.addEventListener('click', () => {
       nav.forEach(nav_el => nav_el.classList.remove('visible'))
   })

   */