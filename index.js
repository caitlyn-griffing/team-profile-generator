const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

// Create a function to write HTML file
function writeToFile(data) {
    fs.writeFile("sample.html", data, error => {
        console.log(error);
    });
}

console.log(inquirer.prompt(writeToFile));


// MAIN HTML
// ! doc
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">

//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

//     <title>Fake Website</title>
// </head>
// <body>

//      INPUT EMPLOYEE CARDS (ETC)

//      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

// </body>
// </html>



// wrapper
// <div class="wrapper"></div>

// 2. Header
// <header class="h1 p-5 bg-warning text-light">Team Profile</header>

// 3. Container holding ALL Employee Cards
//  <div class="container px-4"></div>

// 4. ROW Container to hold cards
// <div class="row p-5 gx-5"></div>

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
