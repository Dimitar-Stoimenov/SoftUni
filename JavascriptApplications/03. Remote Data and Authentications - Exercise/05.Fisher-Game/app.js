const catchesDiv = document.getElementById('catches');
const token = sessionStorage.getItem('userToken');

window.addEventListener('load', () => {
    document.getElementById('loadBtn').addEventListener('click', loadAllCatches);

    if (token != null) {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('addBtn').disabled = false;
        document.getElementById('addBtn').addEventListener('click', submitNewCatch);
    } else {
        document.getElementById('loginBtn').style.display = 'block';
        document.getElementById('addBtn').disabled = true;
    };

    loadAllCatches();
})

async function submitNewCatch() {
    const token = sessionStorage.getItem('userToken');

    const angler = document.getElementById('fieldset').children[2].value;
    const weight = document.getElementById('fieldset').children[4].value;
    const species = document.getElementById('fieldset').children[6].value;
    const location = document.getElementById('fieldset').children[8].value;
    const bait = document.getElementById('fieldset').children[10].value;
    const captureTime = document.getElementById('fieldset').children[12].value;

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
    const id = event.target.parentNode.id;
    const url = 'http://localhost:3030/data/catches/' + id;
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
    const id = event.target.parentNode.id;
    const url = 'http://localhost:3030/data/catches/' + id;
    // const response = await fetch(url, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'json/application', 'X-Authorization': token },
    //     body: JSON.stringify({}),
    // });

    console.log(event.target.parentNode);
    // get each input and update the server;

    // if (!response.ok) {
    //     const error = await response.json();
    //     return alert(error.message);
    // }

    loadAllCatches();
}