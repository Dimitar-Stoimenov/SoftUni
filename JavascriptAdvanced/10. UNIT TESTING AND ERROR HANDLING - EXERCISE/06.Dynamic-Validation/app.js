function validate() {
    let emailInputElement = document.getElementById('email');

    let pattern = /[a-z]+@[a-z]+.[a-z]+/g

    emailInputElement.addEventListener('change', (e) => {
        if (!pattern.test(emailInputElement.value)) {
            emailInputElement.classList.add('error');
        } else {
            emailInputElement.removeAttribute('class');
        }
    })
}