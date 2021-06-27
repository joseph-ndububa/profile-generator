const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template.js');
let profileInfo;
function emailValidationCheck(address) {
    // RegEx source is Tyler McGinnis: https://ui.dev/validate-email-address-javascript/
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);
}

function numCheck(input) {
    if (Number(input)) {
        return true;
    }
    else {
        return false;
    }
}
//prompt user for manager info

const promptManager = managerData => {
    profileInfo = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your team manager?',
            validate: managerName => {
                if (managerName && !numCheck(managerName)) {
                    return true;
                } else {
                    console.log('Please enter the name of your manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: `What is your team manager's employee ID?`,
            validate: managerId => {
                let idNumber = Number(managerId);
                if (idNumber) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `What is your team manager's email address?`,
            validate: managerEmail => {
                if (emailValidationCheck(managerEmail)) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's email address!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: `What is your team manager's office number?`,
            validate: managerOffice => {
                let officeNum = Number(managerOffice);
                if (officeNum) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's office number!`);
                    return false;
                }
            }
        }
    ])
        .then(managerInfo => {
            profileInfo.push(managerInfo);
            selectNext();
        })
};

//prompt user for engineer info

const promptEngineer = engineerData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of your engineer?',
            validate: engineerName => {
                if (engineerName && !numCheck(engineerName)) {
                    return true;
                } else {
                    console.log('Please enter the name of your engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: `What is your engineer's employee ID?`,
            validate: engineerId => {
                if (numCheck(engineerId)) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: `What is your engineer's email address?`,
            validate: engineerEmail => {
                if (emailValidationCheck(engineerEmail)) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's email address!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: `What is your engineer's GitHub username?`,
            validate: engineerGithub => {
                if (engineerGithub && !numCheck(engineerGithub)) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's GitHub username!`);
                    return false;
                }
            }
        }
    ])
        .then(engineerInfo => {
            profileInfo.push(engineerInfo);
            selectNext();
        })
}

// prompt user for intern info

const promptIntern = internData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of your intern?',
            validate: internName => {
                if (internName && !numCheck(internName)) {
                    return true;
                } else {
                    console.log('Please enter the name of your intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: `What is your intern's employee ID?`,
            validate: internId => {
                if (numCheck(internId)) {
                    return true;
                } else {
                    console.log(`Please enter your intern's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: `What is your intern's email address?`,
            validate: internEmail => {
                if (emailValidationCheck(internEmail)) {
                    return true;
                } else {
                    console.log(`Please enter your intern's email address!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: `What is your intern's school?`,
            validate: internSchool => {
                if (internSchool && !numCheck(internSchool)) {
                    return true;
                } else {
                    console.log(`Please enter your the name of your intern's School!`);
                    return false;
                }
            }
        }
    ])
        .then(internInfo => {
            profileInfo.push(internInfo);
            selectNext();
        })
}

// menu for adding members and finalizing team

const selectNext = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'next',
            message: 'Would you like to add another employee, or have you finished building your team?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finished'],
        }
    ])
        .then(nextInfo => {
            if (nextInfo.next == 'Add an Engineer') {
                return promptEngineer();
            }
            else if (nextInfo.next == 'Add an Intern') {
                return promptIntern();
            }
            else if (nextInfo.next == 'Finished') {
                const htmlData = generateHtml(profileInfo);
                fs.writeFile('./dist/profilePage.html', htmlData, err => {
                    if (err) throw new Error(err);
                })
            }
        })
}

promptManager();