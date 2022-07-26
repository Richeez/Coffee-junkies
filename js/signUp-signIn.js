class Login {
    constructor(form, fields) {
        this.form = form;

        this.fields = fields;

        this.validateOnSubmit();

        this.switchState()
    }

    

    validateOnSubmit() {
          
        let track = this;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let error = 0;
            track.fields.forEach((field) => {
                
                const input = document.querySelector(`#${field}`);
                console.log('as PESibling',field.nextElementSibling);
                console.log('as input value', input.value);
                
                track.switchState(input)
                    
                
                if (track.validateFields(input) === false) {
                
                    error++;
                  
                }
            });

            if (error === 0) {
                this.form.submit();
            
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

    
    switchState() {
        
        // let password02 = document.querySelector('#confirm-password');

        let togglePassword01 = document.querySelector('#toggle-password01');

        let togglePassword02 = document.querySelector('#toggle-password02');

        let togglePassword03 = document.querySelector('#toggle-password03');

        let togglePassword04 = document.querySelector('#toggle-password04');
        
        let track = this
        console.log('as tracker',track);
        
        track.fields.forEach((field) => { 
            let password01 = document.querySelector('#password');

            const input = document.querySelector(`#${field}`);
            
            
            togglePassword01.addEventListener('click', function(){ 
                    //todo___toggle attribute type
console.log('are you working');
                let type = password01.getAttribute('type') === 'password' ? 'text' : 'password';
                password01.setAttribute('type', type)

                //todo___toggle icon


                this.classList.toggle('fa-eye-slash')
            });
            
            
            togglePassword02.addEventListener('click', function () { 
                        let password02 = document.querySelector('#confirm-password');
            // let password02 = document.querySelector('#confirm-password');
    
                    //todo___toggle attribute type
    console.log('this is working');
                let type02 = password02.getAttribute('type') === 'password' ? 'text' : 'password';
                password02.setAttribute('type', type02)
    
                //todo___toggle icon
    
    
                this.classList.toggle('fa-eye-slash')
            });
            
            togglePassword03.addEventListener('click', function () { 
                        let password03 = document.querySelector('#password');
    
                    //todo___toggle attribute type
    console.log('as pass 3');
                let type03 = password03.getAttribute('type') === 'password' ? 'text' : 'password';
                password03.setAttribute('type', type03)
    
                //todo___toggle icon
    
    
                this.classList.toggle('fa-eye-slash')
            });
            
            togglePassword04.addEventListener('click', function () { 
                        let password04 = document.querySelector('#password');
            // let password02 = document.querySelector('#confirm-password');
    
                    //todo___toggle attribute type
    console.log('as pass 4');
                let type02 = password04.getAttribute('type') === 'password' ? 'text' : 'password';
                password04.setAttribute('type', type02)
    
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

    const validator = new Login(form, fields);
    
}

