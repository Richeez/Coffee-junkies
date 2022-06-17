// console.log("hello world");

var menuBtn = document.getElementById("menuBtn");


const links = document.querySelectorAll('.link');
console.log(links);
const unOrderedList = document.querySelector('.un-Ordered-list');
console.log(unOrderedList);

      var sideNav = document.getElementById("sideNav");
const sideBar = document.querySelector(".side-bar");
const closeBar = document.querySelector(".close-bar");
        


var toggle = false;
menuBtn.onclick = function () {
      combiningOpenCloseNavBar();
      
};

const clicked = Array.from(links);
console.log(clicked);

function openNavBar() {
      toggle = true;
      sideNav.style.width = "250px";
      sideNav.style.opacity = "1";
      sideBar.style.opacity = "0";
      closeBar.style.opacity = "1";


}
function closeNavBar() {
            toggle = false;

      sideNav.style.width = "0";
      sideNav.style.opacity = "0";
      
      sideBar.style.opacity = "1";
      closeBar.style.opacity = "0";



}

function combiningOpenCloseNavBar() {
      toggle ? closeNavBar() : openNavBar();

}
      

      //  var scroll = new SmoothScroll('a[href*="#"]', {
      //   speed: 1000,
      //   speedAsDuration: true,
      // });

      