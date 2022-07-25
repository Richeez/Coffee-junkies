// console.log("hello world");



// const links = document.querySelectorAll('.link');
// console.log(links);
// const unOrderedList = document.querySelector('.un-Ordered-list');
// console.log(unOrderedList);


var sideNav = document.getElementById("sideNav");
const sideBar = document.querySelector(".side-bar");
const closeBar = document.querySelector(".close-bar");

var menuBtn = document.getElementById("menuBtn");

// console.log(menuBtn);


var toggle = false;
menuBtn.onclick = function () {
      combiningOpenCloseNavBar();
      
};

// const clicked = Array.from(links);
// console.log(clicked);

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

const linkCont = document.querySelectorAll('.link-cont');

    
const links = document.querySelectorAll('.link');
   
function activeState() {
       //* ACTIVE-BTN TOGGLE EFFECT
      for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                  let currentBtn = document.querySelectorAll('.active');
                  currentBtn[0].className = currentBtn[0].className.replace('active', '');

                  this.className += ' active'
            });
        
      }

      
}

activeState();