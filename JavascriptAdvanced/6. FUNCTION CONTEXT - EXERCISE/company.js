class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        for (let arg of [username, salary, position, department]) {
            this.validate(arg)
        }

        if (!this.departments[department]) {
            this.departments[department] = [{ 'name': username, salary, position }]
        } else {
            this.departments[department].push({ 'name': username, salary, position })
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;

    }

    bestDepartment() {
        let bestDepartmentName = '';
        let bestDepartmentAvgSalary = 0
        let sortedBestDepartmentInfo = null

        Object.entries(this.departments).forEach(department => {
            let depName = department[0];
            let depPeopleArray = department[1];
            let depTotalSalary = 0;

            depPeopleArray.forEach(employeeObj => {
                depTotalSalary += employeeObj.salary

            })

            let depAvgSalary = depTotalSalary / depPeopleArray.length

            if (depAvgSalary > bestDepartmentAvgSalary) {
                bestDepartmentAvgSalary = depAvgSalary;
                bestDepartmentName = depName;
                sortedBestDepartmentInfo = depPeopleArray.sort((a, b) => {
                    if (a.salary === b.salary) {
                        return (a.name).localeCompare(b.name)
                    } else {
                        return b.salary - a.salary
                    }
                })
            }
        })

        let output = `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestDepartmentAvgSalary.toFixed(2)}`
        sortedBestDepartmentInfo.forEach(person => {
            output += `\n${person.name} ${person.salary} ${person.position}`
        })

        return output.trim();

    }

    validate(value) {
        if (!value || value < 0) {
            throw new Error("Invalid input!")
        }
    }
}

let c = new Company();
c.addEmployee('1', 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 6, "dyer", "Construction");
c.addEmployee("Stan", 10, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1, "HR", "Human resources");
console.log(c.bestDepartment())