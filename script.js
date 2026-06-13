const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
menu.classList.toggle('hidden')
})

// menuIcon.addEventListener('click', () => {
  //if(menu.className === "hidden") {
    //menu.classList.remove("hidden");
  //} else{
    //menu.classList.add("hidden");
  //}
// });
 
 document.addEventListener("DOMContentLoaded", function () {
  function showTargetProduct() {
    const clickedId = window.location.hash;
    const allMainContents = document.querySelectorAll(".main-content-details");
    allMainContents.forEach(function (content) {
      content.style.display = "none";
    });
    
    if (clickedId) {
      const targetProduct = document.querySelector(clickedId);
      if (targetProduct) {
        targetProduct.style.display = "block";
      }
    } else {
      if (allMainContents.length > 0) {
        allMainContents[0].style.display = "block";
      }
    }
  }

  showTargetProduct();
  window.addEventListener("hashchange", showTargetProduct);
});

 
 

 //menuIcon.addEventListener('click', () => {
  //if(menu.classList.contains('hidden')) {
  //  menu.classList.remove('hidden');
 // } else{
   // menu.classList.add('hidden');
 // }
//});