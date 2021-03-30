function result() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
    }

    Developer.prototype.addTask = function (id, taskName, priority) {
        let task = {id, taskName, priority};

        if (priority === 'high') {
            this.tasks.unshift(task);
        } else {
            this.tasks.push(task);                      
        }
        
        return `Task id ${id}, with ${priority} priority, has been added.`            
    }

    Developer.prototype.doTask = function () {
        if (this.tasks.length === 0) {
            return `${this.firstName}, you have finished all your tasks. You can rest now.`
        }

        let taskName = this.tasks.shift();
        return taskName
    }

    Developer.prototype.getSalary = function () {
        return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
    }

    Developer.prototype.reviewTasks = function () {
        return [
            'Tasks, that need to be completed:',
            this.tasks
                .map(task => `${task.id}: ${task.taskName} - ${task.priority}`)
                .join('\n'),
        ].join('\n')
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience = experience
        }
    }

    Junior.prototype.learn = function (years) {
        this.experience += years;
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience = experience + 5;
        }
    }

    Senior.prototype.changeTaskPriority = function (taskId) {
        let taskIndex = this.tasks.findIndex(task => task.id === taskId);
        let task = this.tasks.splice(taskIndex, 1)[0];

        if (task.priority === 'high') {
            task.priority = 'low';
            this.tasks.push(task);
        } else {
            task.priority = 'high';
            this.tasks.unshift(task);
        }

        return task;
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

//Zero test 1 Developer

const classes = result();
const developer = new classes.Developer("Jonathan", "Joestar");

// Salary
const salaryResult = developer.getSalary();
const salaryExpect = "Jonathan Joestar has a salary of: 1000";
console.log(salaryResult)//.to.be.eq(salaryExpect);

// Add task
const addTaskResult = developer.addTask(1, "Inspect bug", "low");
const addTaskExpect = "Task id 1, with low priority, has been added.";
console.log(addTaskResult)//.to.be.eq(addTaskExpect);


// Review tasks
developer.addTask(2, "Update repository", "high");
const reviewTasksResult = developer.reviewTasks();
const reviewTasksExpect = "Tasks, that need to be completed:\n2: Update repository - high\n1: Inspect bug - low";
console.log(reviewTasksResult)//.to.be.eq(reviewTasksExpect);


//Do task
developer.doTask();
developer.doTask();
const doTaskResult = developer.doTask();
const doTaskExpect = "Jonathan, you have finished all your tasks. You can rest now.";
console.log(doTaskResult)//.to.be.eq(doTaskExpect);