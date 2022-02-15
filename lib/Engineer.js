// 1. Employee properties and methods PLUS Engineer

const Employee = require("./Employee");

// 2. Engineer extends Employee
class Engineer extends Employee {

    // 3. github  ---GitHub username
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    // 4. getGithub()
    getGitHub = () => this.github;
    

    // 5. getRole()  ---overridden to return 'Engineer
    getRole = () => 'Engineer';

    logEngInfo = () => console.log(`GitHub username: ${this.github}.`);

}

module.exports = Engineer;


// -- 6. EXTRA:  ensure user input is in the proper format'