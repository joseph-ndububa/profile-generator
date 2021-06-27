const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, officeNumber, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.github = github;
    }
}

Engineer.prototype.getRole = function () {
    return 'Engineer';
}

Engineer.prototype.getGithub = function () {
    return this.github;
}

module.exports = Engineer;