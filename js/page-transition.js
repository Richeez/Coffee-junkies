


    const linkCont = document.querySelectorAll('.link-cont');

    
    const links = document.querySelectorAll('.transit');
    
//     console.log(links);
const primaryCont = document.querySelector('.primary-container');

const heading = document.querySelector('.heading');

const sections = document.querySelectorAll('.section');


const pageTransition = () => {
    
      //* ACTIVE-BTN TOGGLE EFFECT
      // for (let i = 0; i < links.length; i++) {
      //       links[i].addEventListener('click', function () {
      //             let currentBtn = document.querySelectorAll('.active');
      //             currentBtn[0].className = currentBtn[0].className.replace('active', '');

      //             this.className += ' active'
      //       });
        
      // }

      primaryCont.addEventListener('click', (e) => {

            const clicked = e.target.dataset.id;

            if (clicked) {

                  linkCont.forEach((btn) => {
                        btn.classList.remove('active-page');
                
                  });
                  e.target.classList.add('active-page')

                  //*removing active class from previous page
                  sections.forEach((sec) => {
                        sec.classList.remove('active-page');
                  });
                  const allSection = document.getElementById(clicked);

                  console.log(allSection ,'as current');

                  allSection.classList.add('active-page')
            }
      });

}
 
pageTransition();



// let classSwitcher = document.querySelectorAll('.reveal');

let classSwitcher01 = document.querySelectorAll('.pass-01');
 
 let classSwitcher02 = document.querySelectorAll('.pass-02');

//  const input = document.querySelector('.password');



 let visionWrapper = document.querySelectorAll('.vision-wrapper');

            
            
// function switchState() {

//        for (let i = 0; i < classSwitcher01.length; i++) {
//              classSwitcher01[i].addEventListener('click', function (e) {
//                   //  console.log(classSwitcher01[i]);
//                   let currentBtn = document.querySelectorAll('.opacity');
//                    currentBtn[0].className = currentBtn[0].className.replace('opacity', '');
//                    this.className += ' opacity'

//                   //    look = e.target.id
//                   const  look = document.querySelectorAll('#password')
//                   console.log('as password', look ); 
                   
//                    if (look[0].attributes[1].nodeValue == 'password') {
//                          let output = look[0].attributes[1].value == 'text' 
//                       console.log(output);   
//                      }
//             //   console.log('as password',look );       
//             //       //  if (input.type === 'password') {
//                   //       console.log(input)
//                   //  }
//              });
        
//       }
      
//        for (let i = 0; i < classSwitcher02.length; i++) {
//              classSwitcher02[i].addEventListener('click', function () {
//                   //  console.log(classSwitcher02[i]);
//                   let currentBtn = document.querySelectorAll('.change');
//                  currentBtn[0].className = currentBtn[0].className.replace('change', '');

//                    this.className += ' change'
//              });
        
//        }


// }

//  switchState();