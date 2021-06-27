const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

Manager.prototype.getRole = function () {
    return 'Manager';
}

Manager.prototype.getOffice = function () {
    return this.officeNumber;
}

module.exports = Manager;