function result() {
    class Employee {
        constructor(name, age) {
            this.name = name,
                this.age = age,
                this.salary = 0,
                this.tasks = [],
                this.dividend = 0
        }
    }

    Employee.prototype.work = function () {
        let copy = this.tasks[0]
        this.tasks.push(copy);
        let resultat = this.tasks.shift()
        console.log(resultat)
    }

    Employee.prototype.collectSalary = function () {
        let money = this.salary + this.dividend
        console.log(`${this.name} received ${money} this month.`)
    }

    class Junior extends Employee {
        constructor(name, age) {
        super(name, age),
        
            this.tasks = [`${this.name} is working on a simple task.`]
        }
    }   

    class Manager extends Employee {
        constructor(name, age) {
        super(name, age),
            this.tasks = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`
            ]
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age),
            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,            
            `${this.name} is supervising junior workers.`
            ]
        }
        
    }

    return {Employee, Junior, Manager, Senior}
}

result = result()

var guy1 = new result.Junior('dragan', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('petkan', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('bojan', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

console.log(guy1parent === Object.prototype)//equal(false, "Prototype chain was broken from Junior.");
console.log(guy2parent === Object.prototype)//equal(false, "Prototype chain was broken from Senior.");
console.log(guy3parent === Object.prototype)//equal(false, "Prototype chain was broken from Manager.");

console.log(guy1parent === guy2parent)//equal(true, "Junior and Senior aren't related (parent class not the same).");
console.log(guy2parent === guy3parent)//equal(true, "Senior and Manager aren't related (parent class not the same).");
console.log(guy1parent === guy3parent)//equal(true, "Junior and Manager aren't related (parent class not the same).");

// Stub the console
var oldConsole = console.log;
var log = [];
console.log = function (string) {
    log.push(string);
};

// Test Junior
guy1.work();
guy1.work();
guy1.work();

var expectedGuy1Output = [
    'dragan is working on a simple task.',
    'dragan is working on a simple task.',
    'dragan is working on a simple task.'
];

compareArrays(expectedGuy1Output, log, "Junior's work wasn't logged.");

// Test Senior
log = [];
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();

var expectedGuy2Output = [
    'petkan is working on a complicated task.',
    'petkan is taking time off work.',
    'petkan is supervising junior workers.',
    'petkan is working on a complicated task.',
    'petkan is taking time off work.',
    'petkan is supervising junior workers.',
    'petkan is working on a complicated task.',
    'petkan is taking time off work.',
    'petkan is supervising junior workers.'
];

compareArrays(expectedGuy2Output, log, "Senior's work wasn't logged.");

// Test Manager
log = [];
guy3.work();
guy3.work();
guy3.work();
guy3.work();
guy3.work();
guy3.work();

var expectedGuy3Output = [
    'bojan scheduled a meeting.',
    'bojan is preparing a quarterly report.',
    'bojan scheduled a meeting.',
    'bojan is preparing a quarterly report.',
    'bojan scheduled a meeting.',
    'bojan is preparing a quarterly report.'
];

compareArrays(expectedGuy3Output, log, "Manager's work wasn't logged.");

// Restore the console
console.log = oldConsole;

function compareArrays(array1, array2, message) {
    console.log(array1.length)//equal(array2.length, message);
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i])//equal(array2[i], message);
    }
}