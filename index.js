const inquirer = require('inquirer');
const fs = require('fs');

const promptManager = managerData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your team manager?',
            validate: managerName => {
                if (managerName) {
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
                if (managerId) {
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
                if (managerEmail) {
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
                if (managerOffice) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's office number!`);
                    return false;
                }
            }
        }
    ])
};

const promptEngineer = engineerData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of your engineer?',
            validate: engineerName => {
                if (engineerName) {
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
                if (engineerId) {
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
                if (engineerEmail) {
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
                if (engineerGithub) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's GitHub username!`);
                    return false;
                }
            }
        }
    ])
}

const promptIntern = internData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of your intern?',
            validate: internName => {
                if (internName) {
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
                if (internId) {
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
                if (internEmail) {
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
                if (internSchool) {
                    return true;
                } else {
                    console.log(`Please enter your the name of your intern's School!`);
                    return false;
                }
            }
        }
    ])
}

const selectNext = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'next',
            message: 'Would you like to add another employee, or have you finished building your team?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finished'],
            validate: nextInput => {
                if (nextInput == 'Add an Engineer') {
                    return promptEngineer();
                } else if (nextInput == 'Add an Intern') {
                    return promptIntern();
                }
                else if (nextInput == 'Finished') {
                    return;
                }
            }
        }
    ])
}

//promptManager();