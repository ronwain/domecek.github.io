/*
if(sessionStorage.getItem("obyvak") === null){
    console.log("Item does not exist in localstoarge");
}else{
   console.log("Item exists in localstorage");
   var ukaz = document.getElementById("star_obyvak");
  
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}
*/

// Kontrola localStorage -> projetí všech místností podle toho přirazení class
// pole: https://codepen.io/Matty06/pen/bGKxNqX?editors=1111 s tím dál pracovat pomocí metod .map .forEach a podle toho přiřazovat classy 


//Modaly apky   

// HINT button 
var modalHintLoz = document.getElementById('loznice-hint-modal');

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("loznice--hint")[0];

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


/*počítání*/


 var clicks = 0
 function clickME(event) {
   clicks += 1
 
   document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case
 
   console.log(clicks)

   if(clicks == 2) {
    document.getElementById('gohome').style.display = 'block'; 
    document.getElementById('zmiz').style.display = 'none';
    document.getElementById('loznice-hint').style.display = 'none';
    localStorage.setItem("mistnost", "loznice")

} else {
    document.getElementById('gohome').style.display = 'none';
}

 
 }
 
 document.querySelectorAll(`a`) // select all buttons
   .forEach( 
     el => el.addEventListener(`click`, clickME, {once: true})
   ) 

  
   
// Retrieve vlož věci ze storage
document.getElementById("pokus").innerHTML = localStorage.getItem("mistnost");



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

