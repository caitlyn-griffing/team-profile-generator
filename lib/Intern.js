// Employee properties and methods PLUS

const Employee = require("./Employee");

// Intern extends Employee
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
}

module.exports = Intern;

// school
// getSchool()
// getRole()  ---overridden to return 'Intern'

// -- EXTRA:  ensure user input is in the proper format