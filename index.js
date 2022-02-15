const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArray = [];


// Create a function to write HTML file
function writeToFile(data) {
    fs.writeFile("sample.html", data, error => {
        console.log(error);
    });
}

// MANAGER QUESTIONS AND ANSWERS FOR NAME, ID, EMAIL, OFFICE NUMBER CHOICE

const managerInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter Managers Name Here"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Managers Id Number Here"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Managers Email Here"
    },
    {
        type: "list",
        name: "officeNumber",
        message: "Pick Correct Office Number",
        choices: ['555-555-5555', '777-777-7777', '999-999-9999'],
    },
]

// PROMPT MANAGER QUESTIONS AND ANSWERS ABOVE (NAME, ID, EMAIL, OFFICE NUMBER CHOICES)

async function managerPrompt() {
    inquirer.prompt(managerInfo).then(answer => {
        // write html here
        const managerHtml = `
        <div class="card border border-secondary bg-dark shadow bg-opacity-25 col-3">
            <div class="card-body">
                <div class="card-top rounded bg-dark text-white px-4 py-3 border border-secondary">
                    <h3 class="card-title">Manager</h3>
                    <h4 class="card-subtitle">${answer.name}</h5>
                </div>
                <div class="py-3 information">
                    <div class='rounded border border-secondary px-2 p-1' id="empID">${answer.id}</div>
                    <div class='rounded border border-secondary px-2 p-1' id="empEmail">${answer.email}</div>
                    <div class='rounded border border-secondary px-2 p-1' id="empOther">${answer.officeNumber}</div>
                </div>
            </div>
        </div>
        `

        employeeArray.push(managerHtml)
        console.log(managerHtml);

        console.log(answer);

        addEmployee();

    })
}

const internInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter Interns Name Here"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Interns Id Number Here"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Interns Email Here"        
    },
    {
        type: "input",
        name: "school",
        message: "Enter the School the Intern Attended"        
    },
]

async function internPrompt () {
    await inquirer.prompt(internInfo).then(answer => {
        // write html here
        const internHtml = `
        <div class="card border border-secondary bg-dark shadow bg-opacity-25 col-3">
            <div class="card-body">
                <div class="card-top rounded bg-dark text-white px-4 py-3 border border-secondary">
                    <h3 class="card-title">Intern</h3>
                    <h4 class="card-subtitle">${answer.name}</h5>
                </div>
                <div class="py-3 information">
                    <div class='rounded border border-secondary px-2 p-1' id="empID">${answer.id}</div>
                    <div class='rounded border border-secondary px-2 p-1' id="empEmail">${answer.email}</div>
                    <div class='rounded border border-secondary px-2 p-1' id="empOther">${answer.school}</div>
                </div>
            </div>
        </div>
        `
    
        employeeArray.push(internHtml)
        console.log(internHtml);
    
        console.log(answer);
        addEmployee();
    })
}


const engineerInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter Engineer Name Here"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Engineer Id Number Here"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Engineer Email Here"        
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username"        
    },
]

async function engineerPrompt () {
    await inquirer.prompt(engineerInfo).then(answer => {
        // write html here
        const engineerHtml = `
        <div class="card border border-secondary bg-dark shadow bg-opacity-25 col-3">
            <div class="card-body">
                <div class="card-top rounded bg-dark text-white px-4 py-3 border border-secondary">
                    <h3 class="card-title">Engineer</h3>
                    <h4 class="card-subtitle">${answer.name}</h5>
                </div>
                <div class="py-3 information">
                    <div class='rounded border border-secondary px-2 p-1' id="empID">${answer.id}</div>
                    <div class='rounded border border-secondary px-2 p-1' id="empEmail">${answer.email}</div>
                    <div class='rounded border border-secondary px-2 p-1' id="empOther">${answer.github}</div>
                </div>
            </div>
        </div>
        `
    
        employeeArray.push(engineerHtml)
        console.log(engineerHtml);
    
        console.log(answer);
        addEmployee();
    })
}

async function addEmployee() {
    await inquirer.prompt([
        {
            type: "input",
            name: "addEmployee",
            message: "Do you want to add employee?"
        },
    ])
    .then(answer => {
        if(answer.addEmployee == "yes") {
            chooseEmployee();
        }
        else if (answer.addEmployee == "no") {
            employeeArray.join('');
            const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            
                <title>Fake Website</title>
            </head>
            <body>

                <div class="wrapper">
                    <header class="h1 p-5 bg-warning text-light">Team Profile</header>
                    <div class="container px-4">
                        <div class="row p-5 g-5">
                            ${employeeArray}
                        </div>
                    </div>
                </div>
                
                

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </body>
            `
            writeToFile(html);
        }
        
    })
}

async function chooseEmployee() {
    await inquirer.prompt([
        {
            type: "input",
            name: "chooseEmployee",
            message: "Which employee would you like to add?"
        }
    ])
    .then(answer => {
        if(answer.chooseEmployee == "intern") {
            internPrompt()
        }
        else if (answer.chooseEmployee == "engineer") {
            engineerPrompt();
        }

    })
}

function start() {
    managerPrompt();
    // addEmployee();

}

function init() {
    start();
}

init();


// console.log(`${Employee}`);
// console.log(`${Engineer}`);
// console.log(`${Intern}`);
// console.log(`${Manager}`);
// console.log(`${writeToFile}`);



// MAIN HTML
// ! doc

// <body>

//      INPUT EMPLOYEE CARDS (ETC)

//      

// </body>
// </html>



// wrapper
// 

// 2. Header
// 

// 3. Container holding ALL Employee Cards
//  

// 4. ROW Container to hold cards
// 

// 5. CARD Container 
//  <div class="card border border-secondary bg-dark shadow bg-opacity-25 col-3"></div>

// 6. card-body
// <div class="card-body"></div>

// 7. Container for the TOP HALF of the card
// <div class="card-top rounded bg-dark text-white px-4 py-3 border border-secondary">

// 8. Card title (Employee Name)
// <h3 class="card-title">Caitlyn</h3>
// <h5 class="card-subtitle">Manager</h5>

// 9. Employee Information Container (bottom half)
// <div class="py-3 information">

// 10. Individual employee info BOXES 
// <div class='rounded border border-secondary px-2 p-1' id="empID">hey</div>
// <div class='rounded border border-secondary px-2 p-1' id="empEmail">hey</div>
// <div class='rounded border border-secondary px-2 p-1' id="empOther">hey</div>
