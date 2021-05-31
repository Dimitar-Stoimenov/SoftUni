function start() {
    displayStudents();

    document.getElementById('submit').addEventListener('click', createStudent);
}

start();

async function getStudentsList() {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function displayStudents() {
    const data = await getStudentsList();
    const tableBodyEl = document.querySelector('#results > tbody');
    const rows = Object.values(data).map(createRow).join('');

    function createRow(s) {
        const result =
            `<tr>
            <td>${s.firstName}</td>
            <td>${s.lastName}</td>
            <td>${s.facultyNumber}</td>
            <td>${s.grade}</td>
            </tr>`

        return result;
    }

    tableBodyEl.innerHTML = rows;
}

async function createStudent(event) {
    event.preventDefault();

    const formEl = document.getElementById('form');
    const formData = new FormData(formEl);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    const url = 'http://localhost:3030/jsonstore/collections/students';
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'json/application' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    });

    displayStudents();
}