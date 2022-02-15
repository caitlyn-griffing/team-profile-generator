// 1. Employee properties and methods PLUS

const Employee = require("./Employee");

// 2. Intern extends Employee
class Intern extends Employee {
    // 3.1 school
    constructor(name, id, email, school){
        super(name, id, email);
        // 3.2 school
        this.school = school;
    }

    // 4. getSchool()
    getSchool = () => this.school;

    // 5. getRole()  ---overridden to return 'Intern'
    getRole = () => 'Intern';

    logIntInfo = () => console.log(`${this.name} goes to ${this.school}.`);
}

module.exports = Intern;


// -- 6. EXTRA:  ensure user input is in the proper format