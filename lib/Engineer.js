const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
}

Engineer.prototype.getRole = function () {
    return 'Engineer';
}

Engineer.prototype.getGithub = function () {
    return `<a href="https://github.com/${this.github}" target="_blank">${this.github}</a>`
}

module.exports = Engineer;
