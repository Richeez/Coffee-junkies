class SignIn {
    constructor(form01, fields) {
        this.form01 = form01;

        this.fields = fields;

        this.validateOnSubmitForSignIn();

        this.switchStateForSignIn()
    }

    

    validateOnSubmitForSignIn() {
          
        let track = this;
        this.form01.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let error = 0;
            track.fields.forEach((field) => {
                
                const input = document.querySelector(`#${field}`);
                console.log('as PESibling',field.nextElementSibling);
                console.log('as input value', input.value);
                
                // track.switchStateForSignIn(input)
                    
                
                if (track.validateFields(input) === false) {
                
                    error++;
                  
                }
            });

            if (error === 0) {
                this.form01.submit();
            
            }


        });

      

    }

    // fieldChecker() {
        
    // }
    validateFields(field) {
        if (field.value.trim() === '') {
        
            this.setStatus(field, `${field.nextElementSibling.innerText}Field can not be blank`, 'error');
            return false;
        } else {


             if (field.type === 'password') {
         
                if (field.value.length < 8) {
                    console.log('am working');
                    this.setStatus(field, `${field.nextElementSibling.innerText}Must be at least 8 characters`, 'error');
                    return false;
                } else {
                    this.setStatus(field, null, 'successful');
                    return true;
                }
                
            } else {
                this.setStatus(field, null, 'successful');
                return true;
            }
        
        }
    
    }
    
    setStatus(field, message, status ) {
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

    
    switchStateForSignIn() {
        


        let togglePassword03 = document.querySelector('#toggle-password03');

        
        let track = this
        console.log('as tracker',track);
        
        track.fields.forEach((field) => { 
    

            const input = document.querySelector(`#${field}`);
            
            
            
            togglePassword03.addEventListener('click', function () { 
                        let password02 = document.querySelector('#password02');
    
                    //todo___toggle attribute type
    console.log('as pass 3');
                let type = password02.getAttribute('type') === 'password' ? 'text' : 'password';
                password02.setAttribute('type', type)
    
                //todo___toggle icon
    
    
                this.classList.toggle('fa-eye-slash')
            });
            
            
        });

 }



    
    
}


const form01 = document.querySelector('#form01');

if (form01) {
    const fields = ['email02', 'password02'];

    fields.forEach(field => { 
        console.log(field);
    });

    const validator = new SignIn(form01, fields);
    
}
