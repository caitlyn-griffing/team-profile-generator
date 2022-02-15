// 1. Employee properties and methods PLUS

const Employee = require('./Employee');

// 2. Manager extends Employee
class Manager extends Employee {
    // 3.1 officeNumber
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        // 3.2 officeNumber
        this.officeNumber = officeNumber; 
    }

    getOfficeNumber = () => this.officeNumber

    // 4. getRole()  ---overridden to return 'Manager'
    getRole = () => 'Manager';

    logManInfo = () => console.log(`Office Number: ${this.officeNumber}`);


}


// EXPORT
module.exports = Manager;



// -- 5. EXTRA:  ensure user input is in the proper format