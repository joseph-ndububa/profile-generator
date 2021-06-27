const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

function generateHtml(profileData) {

    let cards = [];

    for (i = 0; i < profileData.length; i++) {

        if (profileData[i].managerName) {
            let manager = new Manager(profileData[i].managerName, profileData[i].managerId, profileData[i].managerEmail, profileData[i].managerOffice);
            let card = `<div class="card mb-4 ml-4 mr-4 mt-4 shadow" style="width: 13rem;">
            <div class="card-header h5 bg-primary text-white">
                <p>${manager.getName()}</p>
                <p><span class="glyphicon glyphicon-tasks"></span>${manager.getRole()}</p>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${manager.getId()}</p>
                <p class="card-text">Email: ${manager.getEmail()}</p>
                <p class="card-text">Office Number: ${manager.getOffice()}</p>
            </div>
        </div>`
            cards.push(card);
        }
        else if (profileData[i].engineerName) {
            let engineer = new Engineer(profileData[i].engineerName, profileData[i].engineerId, profileData[i].engineerEmail, profileData[i].engineerGithub);
            let card = ` <div class="card mb-4 ml-4 mr-4 mt-4 shadow" style="width: 13rem;">
            <div class="card-header h5 bg-primary text-white">
                <p>${engineer.getName()}</p>
                <p><span class="glyphicon glyphicon-wrench"></span>${engineer.getRole()}</p>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${engineer.getId()}</p>
                <p class="card-text">Email: ${engineer.getEmail()}</p>
                <p class="card-text">GitHub: ${engineer.getGithub()}</p>
            </div>
        </div>`
            cards.push(card);
        }
        else if (profileData[i].internName) {
            let intern = new Intern(profileData[i].internName, profileData[i].internId, profileData[i].internEmail, profileData[i].internSchool);
            let card = `<div class="card mb-4 ml-4 mr-4 mt-4 shadow" style="width: 13rem;">
            <div class="card-header h5 bg-primary text-white">
                <p>${intern.getName()}</p>
                <p><span class="glyphicon glyphicon-pencil"></span>${intern.getRole()}</p>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${intern.getId()}</p>
                <p class="card-text">Email: ${intern.getEmail()}</p>
                <p class="card-text">GitHub: ${intern.getSchool()}</p>
            </div>
        </div>`
            cards.push(card);
        }
    }

    let cardElements = cards.join(" ");

    return `

<!DOCTYPE html>
<html lang="en">

</html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./style.css" />
    <title>Engineering Team Profile</title>
</head>

<header class="container">
    <div class="col-10" id="header">
        <h1 align="center" id="title">My Software Engineering Team</h1>
    </div>
</header>

<body class="container">
<div class="row col-10 justify-content-center">
${cardElements}
</div>
</body>

</html>
`

}

module.exports = generateHtml;