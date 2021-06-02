const catchesDiv = document.getElementById('catches');

window.addEventListener('load', () => {
    document.getElementById('loadBtn').addEventListener('click', loadAllCatches);

    loadAllCatches();
})

function checkForLoginData() {
    const token = sessionStorage.getItem('userToken');

    if (token != null) {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('addBtn').disabled = false;
        document.getElementById('addBtn').addEventListener('click', submitNewCatch);
    } else {
        document.getElementById('loginBtn').style.display = 'block';
        document.getElementById('addBtn').disabled = true;
    };
}

async function submitNewCatch() {
    const token = sessionStorage.getItem('userToken');
    const fieldSetElement = document.getElementById('fieldset');

    const angler = fieldSetElement.children[2].value;
    const weight = fieldSetElement.children[4].value;
    const species = fieldSetElement.children[6].value;
    const location = fieldSetElement.children[8].value;
    const bait = fieldSetElement.children[10].value;
    const captureTime = fieldSetElement.children[12].value;

    if (angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == '') {
        return alert('All fields are required!');
    }

    const url = 'http://localhost:3030/data/catches';
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    loadAllCatches();
}

async function loadAllCatches() {
    checkForLoginData();

    const url = 'http://localhost:3030/data/catches';
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();

    catchesDiv.innerHTML = '';
    data.forEach(displayCatch);
    document.querySelectorAll('.delete').forEach(el => el.addEventListener('click', deleteCatch));
    document.querySelectorAll('.update').forEach(el => el.addEventListener('click', updateCatch));
}

function displayCatch(data) {
    let disabledMark = 'disabled';

    if (data._ownerId == sessionStorage.userId) {
        disabledMark = '';
    }

    const result = document.createElement('div');
    result.className = 'catch';
    result.id = data._id;
    result.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${data.angler}" />
    <hr>
    <label>Weight</label>
    <input type="number" class="weight" value="${data.weight}" />
    <hr>
    <label>Species</label>
    <input type="text" class="species" value="${data.species}" />
    <hr>
    <label>Location</label>
    <input type="text" class="location" value="${data.location}" />
    <hr>
    <label>Bait</label>
    <input type="text" class="bait" value="${data.bait}" />
    <hr>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${data.captureTime}" />
    <hr>
    <button ${disabledMark} class="update">Update</button>
    <button ${disabledMark} class="delete">Delete</button>`

    catchesDiv.appendChild(result);
}

async function deleteCatch(event) {
    const token = sessionStorage.getItem('userToken');
    const id = event.target.parentNode.id;
    const url = 'http://localhost:3030/data/catches/' + id;
    const confirmed = confirm('Are you sure you want to delete this catch?');

    if (!confirmed) {
        return;
    }

    const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'json/application', 'X-Authorization': token },
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    loadAllCatches();
}

async function updateCatch(event) {
    const token = sessionStorage.getItem('userToken');
    const id = event.target.parentNode.id;
    const url = 'http://localhost:3030/data/catches/' + id;
    const divEl = document.getElementById(id);
    const angler = divEl.children[1].value;
    const weight = divEl.children[4].value;
    const species = divEl.children[7].value;
    const location = divEl.children[10].value;
    const bait = divEl.children[13].value;
    const captureTime = divEl.children[16].value;

    const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'json/application', 'X-Authorization': token },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime }),
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    loadAllCatches();
}