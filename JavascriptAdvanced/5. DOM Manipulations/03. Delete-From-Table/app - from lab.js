function deleteByEmail() {
    let emailList = document.getElementById('customers');
    let inputElement = emailList.nextElementSibling.children[0];
    let enteredEmail = inputElement.value;
    let resultDiv = document.getElementById('result');

    let customerEmails = document.querySelectorAll('#customers td:nth-of-type(2)');
    let isDeleted = false

    for (const customerElement of customerEmails) {
        if (enteredEmail === customerElement.textContent) {
            customerElement.parentElement.remove()
            resultDiv.textContent = ''
            isDeleted = true
        }
    }

    if (!isDeleted) {
        resultDiv.textContent = 'Not found.'
    }

    inputElement.value = ''
}