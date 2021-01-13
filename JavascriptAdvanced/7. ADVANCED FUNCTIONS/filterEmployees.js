function solve(data, criteria) {
    let employees = JSON.parse(data);
    let [criteriaKey, criteriaValue] = criteria.split('-');

    employees
        .filter(x => x[criteriaKey] === criteriaValue || criteriaKey === 'all')
        .forEach((employee, i) => {
            console.log(i + '. ' + employee.first_name + ' ' + employee.last_name + ' - ' + employee.email);
        });
}

solve(
    `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Male'
)
