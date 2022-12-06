
let storage = ["koupelna", "kuchyn", "obyvak"];

storage.map((item) => {
  console.log(item);
});



if(sessionStorage.getItem("obyvak") === null){
    console.log("Item does not exist in localstoarge");
}else{
   console.log("Item exists in localstorage");
   var ukaz = document.getElementById("star_obyvak");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("mistnost") === null){
    console.log("Item does not exist in localstoarge");
}else{
   console.log("Item exists in localstorage");
   var ukaz = document.getElementById("star_kuchyne");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

// Kontrola localStorage -> projetí všech místností podle toho přirazení class
// pole: https://codepen.io/Matty06/pen/bGKxNqX?editors=1111 s tím dál pracovat pomocí metod .map .forEach a podle toho přiřazovat classy 

  
   
// Retrieve vlož věci ze storage
document.getElementById("pokus").innerHTML = sessionStorage.getItem("mistnost");



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

