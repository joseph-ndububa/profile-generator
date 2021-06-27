class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = '';
    }
}

Employee.prototype.getName = function () {
    return this.name;
}

Employee.prototype.getId = function () {
    return this.id;
}

Employee.prototype.getEmail = function () {
    return `<a href="mailto:${this.email}">${this.email}</a>`
}

Employee.prototype.getRole = function () {
    return this.role;
}

module.exports = Employee;