class SignUp {
    constructor(form, fields) {
        this.form = form;

        this.fields = fields;

        this.validateOnSubmitForSignUp();

        this.switchStateForSignUp()
    }

    

    validateOnSubmitForSignUp() {
          
        let track = this;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let error = 0;
            track.fields.forEach((field) => {
                
                const input = document.querySelector(`#${field}`);
                console.log('as PESibling',input);
                console.log('as input value', input.value);
                
                // track.switchStateForSignUp(input)
                    
                
                if (track.validateFields(input) === false) {
                
                    error++;
                  
                }
            });

            if (error === 0) {
                // this.form.submit();
            console.log('success');
            }


        });

      

    }

    // fieldChecker() {
        
    // }
    validateFields(field) {

       const pass01 = document.querySelector('.password')

      const  pass02 = document.querySelector('.confirm-password')
       
        if (field.value.trim() === '') {
        
            this.setStatus(field, `${field.nextElementSibling.innerText}Field can not be blank`, 'error');
            // return false;
        } else {


             if (field.type === 'password') {
                

                    

                if (field.value.length < 8) {
                    console.log('am working');
                    this.setStatus(field, `${field.nextElementSibling.innerText}Must be at least 8 characters`, 'error');
                    // return false;

                    
                } else {
                    this.setStatus(field, null, 'successful');
                    // return true;
                }

                if (pass01.value !== pass02.value) {
                 
                    this.setStatus(field, `${field.nextElementSibling.innerText}Passwords do not match`, 'error');
                    // return false;

             } else {
                this.setStatus(field, null, 'successful');

                    
                 }
                
                
            } else {
                this.setStatus(field, null, 'successful');
                // return true;
            }

            
        
        }
    
    }
    
    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector('.action-message');
        let timeOut = 5000;
        
        if (status === 'successful') {
            if (errorMessage) {

                errorMessage.innerText = '';

                
            }

            field.classList.remove('error');
         field.nextElementSibling.classList.remove('fail');

            
        }
        if (status === 'error') {
            errorMessage.innerText = message;
            field.nextElementSibling.classList.add('fail');
            field.classList.add('error');

            setTimeout(() => {
                errorMessage.innerText = '';
            field.nextElementSibling.classList.remove('fail');
            field.classList.remove('error');

            }, timeOut);
        } 
        

    }

    
    switchStateForSignUp() {
        
        // let password02 = document.querySelector('#confirm-password');

        let togglePassword01 = document.querySelector('#toggle-password01');

        let togglePassword02 = document.querySelector('#toggle-password02');        
        let track = this
        // console.log('as tracker',track);
        
        track.fields.forEach((field) => { 
            let password = document.querySelector('#password');

            
            
            togglePassword01.addEventListener('click', function(){ 
                    //todo___toggle attribute type
console.log('are you working');
                let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type)

                //todo___toggle icon


                this.classList.toggle('fa-eye-slash')
            });
            
            
            togglePassword02.addEventListener('click', function () { 
                        let confirmPassword = document.querySelector('#confirm-password');
            // let password02 = document.querySelector('#confirm-password');
    
                    //todo___toggle attribute type
    console.log('this is working');
                let type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
                confirmPassword.setAttribute('type', type)
    
                //todo___toggle icon
    
    
                this.classList.toggle('fa-eye-slash')
            });
            
                   });

 }



    
    
}


const form = document.querySelector('#form');

if (form) {
    const fields = ['first-name', 'last-name', 'email', 'password', 'confirm-password'];

    fields.forEach(field => { 
        // console.log(field);
    });

    const validator = new SignUp(form, fields);
    
}


