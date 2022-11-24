console.log("moc nečum");
console.log(sessionStorage)


// Retrieve vlož věci ze storage
//document.getElementById("pokus").innerHTML = window.sessionStorage.getItem("lastname");

console.log("moc nečum");


//Modaly apky

// HINT button 
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







//Modaly Ložnice
// Kočka 
var ebModal = document.getElementById('loznice--modal_kocka');
var ebBtn = document.getElementById("loznice--link_kocka");
var ebSpan = document.getElementsByClassName("loznice--modal")[0];


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


// Postel 
var ebModal1 = document.getElementById('loznice--modal_postel');

// Get the button that opens the modal
var ebBtn1 = document.getElementById("loznice--link_postel");

// Get the <span> element that closes the modal
var ebSpan1 = document.getElementsByClassName("loznice--modal_postel")[0];

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




/*počítání*/


 var clicks = 0
 function clickME(event) {
   clicks += 1
 
   document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case
 
   console.log(clicks)

   if(clicks == 2) {
    document.getElementById('gohome').style.display = 'block'; 
    document.getElementById('zmiz').style.display = 'none';
    document.getElementById('zmiz2').style.display = 'none';

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