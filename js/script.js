let menuButton = document.getElementById("menu-btn");

let menuContainer = document.getElementById("menu");

let favButton = document.querySelectorAll(".num");

let appendImg = document.getElementById("img");

let favHeader = document.getElementById("header");

let favCaption = document.getElementById("text");
/* toggle menu button */

function toggleMenu(){
  menuContainer.classList.toggle('show');
}

/* img changer */

for(let i = 0; i < favButton.length; i++){
  favButton[i].addEventListener('mouseover', function(e){
    if(e.target.value === "25"){
      appendImg.src = "images/fav-img-1.jpg"
      favHeader.innerHTML = "Customize your drink";
      favCaption.innerHTML = "Make your drink just right with an extra <br> espresso shot, dairy substitute or a dash of <br> your favorite syrup."

    }

   else if(e.target.value === "50"){
      appendImg.src = "images/fav-img-2.jpg"
      favHeader.innerHTML = 'Brewed hot coffee, bakery <br> item or hot tea';
      favCaption.innerHTML = "Pair coffee cake or an almond croissant with <br> your fresh cup of hot brew.";

    }
    else if(e.target.value === "150"){
      appendImg.src = "images/fav-img-3.jpg"
      favHeader.innerHTML = "Handcrafted drink, hot <br> breakfast or parfait";
      favCaption.innerHTML = "Have a really good morning with a breakfast <br> sandwich, oatmeal or your favorite drink."
    }
    else if(e.target.value === "200"){
      appendImg.src = "images/fav-img-4.jpg"
      favHeader.innerHTML = "Salad, sandwich or protein box";
      favCaption.innerHTML = "Nourish your day with a hearty Chipotle <br> Chicken Wrap or Eggs & Cheese Protein Box."

    }
    else if(e.target.value === "400"){
      appendImg.src = "images/fav-img-5.jpg"
      favHeader.innerHTML = "Select merchandise or at- <br> home coffee";
      favCaption.innerHTML = "Take home a signature cup, a bag of coffee or <br> your choice of select coffee accessories."
    }
  })
}

menuButton.addEventListener("click", toggleMenu);