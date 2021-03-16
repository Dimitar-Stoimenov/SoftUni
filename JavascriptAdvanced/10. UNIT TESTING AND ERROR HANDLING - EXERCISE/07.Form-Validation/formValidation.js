function validate() {
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm-password');
    let companyElement = document.getElementById('company');
    let companyInfoElement = document.getElementById('companyInfo');

    let companyNumberElement = document.getElementById('companyNumber')

    companyElement.addEventListener('click', (e) => {
        if (companyElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    });

    let submitButtonElement = document.getElementById('submit');

    submitButtonElement.addEventListener('click', (e) => {
        if (companyElement.checked) {
            let companyNumberPattern = /^[1-9][0-9]{3}$/g

            if (!companyNumberPattern.test(companyNumberElement.value)) {
                companyNumberElement.style.borderColor = 'red';
            } else {
                companyNumberElement.style.border = 'none';

            }
        }

        let userPattern = /[a-z0-9]{3,20}/g

        if (!userPattern.test(usernameElement.value)) {
            usernameElement.style.borderColor = 'red';
        } else {
            usernameElement.style.border = 'none';
        }
    })
}
