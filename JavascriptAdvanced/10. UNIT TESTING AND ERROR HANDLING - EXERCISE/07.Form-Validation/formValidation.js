function validate() {
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm-password');
    let companyElement = document.getElementById('company');
    let companyInfoElement = document.getElementById('companyInfo');

    let companyNumberElement = document.getElementById('companyNumber');
    let validationElement = document.getElementById('valid');

    companyElement.addEventListener('change', (e) => {
        if (companyElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    });

    let submitButtonElement = document.getElementById('submit');

    submitButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let validation = true;

        if (companyElement.checked) {
            let companyNumberPattern = /^[1-9][0-9]{3}$/g

            if (!companyNumberPattern.test(companyNumberElement.value)) {
                companyNumberElement.style.borderColor = 'red';
                validation = false;
            } else {
                companyNumberElement.style.border = 'none';

            }
        };

        let userPattern = /[A-Za-z0-9]{3,20}/g;

        if (!userPattern.test(usernameElement.value)) {
            usernameElement.style.borderColor = 'red';
            validation = false;
        } else {
            usernameElement.style.border = 'none';
        }
        
        let emailPattern = /^.*@\w*\.+\w*$/g
    
        if (!emailPattern.test(emailElement.value)) {
            emailElement.style.borderColor = 'red';
            validation = false;
        } else {
            emailElement.style.border = 'none';
        }

        let passwordPattern = /\w{5,15}/g;

        if(!passwordPattern.test(passwordElement.value)) {
            passwordElement.style.borderColor = 'red';
            validation = false;
        } else {
            passwordElement.style.border = 'none';
        }

        if (passwordElement.value != confirmPasswordElement.value) {
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.borderColor = 'red';
            validation = false;
        } else {
            confirmPasswordElement.style.border = 'none';

        }
    
        if (validation) {
            validationElement.style.display = 'block';
        } else {
            validationElement.style.display = 'none';
        }
    });
}
