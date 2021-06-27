window.addEventListener('load', solution);

function solution() {
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const code = document.getElementById('code');
    const submitBtn = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');

    submitBtn.addEventListener('click', () => {
        const infoPreviewUlEl = document.getElementById('infoPreview');

        if (fname.value == '' || email.value == '') {
            return;
        } else {
            submitBtn.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;

            let nameEl = e('li', {}, `Full Name: ${fname.value}`);
            infoPreviewUlEl.appendChild(nameEl);
            let emailEl = e('li', {}, `Email: ${email.value}`);
            infoPreviewUlEl.appendChild(emailEl);
            let phoneEl = e('li', {}, `Phone Number: ${phone.value}`);
            infoPreviewUlEl.appendChild(phoneEl);
            let addressEl = e('li', {}, `Address: ${address.value}`);
            infoPreviewUlEl.appendChild(addressEl);
            let codeEl = e('li', {}, `Postal Code: ${code.value}`);
            infoPreviewUlEl.appendChild(codeEl);

            let f = fname.value;
            let em = email.value;
            let ph = phone.value;
            let ad = address.value;
            let c = code.value;

            fname.value = '';
            email.value = '';
            phone.value = '';
            address.value = '';
            code.value = '';

            editBtn.addEventListener('click', () => {
                submitBtn.disabled = false;
                editBtn.disabled = true;
                continueBtn.disabled = true;

                infoPreviewUlEl.innerHTML = '';

                fname.value = f;
                email.value = em;
                phone.value = ph;
                address.value = ad;
                code.value = c;
            });

            continueBtn.addEventListener('click', () => {
                const divBlock = document.getElementById('block');
                divBlock.innerHTML = '';
                const h3El = document.createElement('h3');
                h3El.textContent = 'Thank you for your reservation!';
                divBlock.appendChild(h3El);
            })
        }
    })

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == ' number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}