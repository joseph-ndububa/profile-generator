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

promptManager();