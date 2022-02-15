// Employee properties and methods PLUS Engineer

const Employee = require("./Employee");

// Engineer extends Employee
class Engineer extends Employee {

    // github  ---GitHub username
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    // getGithub()
    getGitHub = () => this.github;
    

    // getRole()  ---overridden to return 'Engineer
    getRole = () => 'Engineer';

    logEngInfo = () => console.log(`GitHub username: ${this.github}.`);

}

module.exports = Engineer;


// -- EXTRA:  ensure user input is in the proper format'