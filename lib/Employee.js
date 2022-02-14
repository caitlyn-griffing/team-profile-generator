// Employee Information
 class Employee{
     constructor(name, id, email){ 
         this.name = name; 
         this.id = id; 
         this.email = email;
    } 
    // 1. getName()
    getName = () => this.name;
    // 2. getId()
    getId = () => this.id;
    // 3. getEmail()
    getEmail = () => this.email;
    // 4. getRole()  ---returns 'Employee'
    getRole = () => 'Employee';
    // console log 'Welcome, {employee name}! ID number, {employee id number}.
    logEmpInfo = () => console.log(`Welcome, ${this.name}! ID number, ${this.id}.`)
 }

module.exports = Employee;








// the other 3 classes (Engineer, Intern, Manager) 
// Will extend "Employee"

// -- EXTRA:  ensure user input is in the proper format