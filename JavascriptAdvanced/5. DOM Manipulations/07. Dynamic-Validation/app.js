function validate() {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', function (e) {
        if (!pattern.test(inputElement.value)) {
            e.currentTarget.classList.add('error')
        } else {
            e.currentTarget.classList.remove('error')
        }
    })
}