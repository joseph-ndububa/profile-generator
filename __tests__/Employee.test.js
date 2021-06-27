const Employee = require('../lib/Employee');

test('employee properties', () => {
    const employee = new Employee('Test1', 1000, 'test1@test.ca');
    expect(employee.name).toBe('Test1');
    expect(employee.id).toBe(1000);
    expect(employee.email).toBe('test1@test.ca');
    expect(employee.role).toBe('');
});

test("employee methods", () => {
    const employee = new Employee('Test2', 2000, 'test2@test.ca');
    expect(employee.getName()).toBe('Test2');
    expect(employee.getId()).toBe(2000);
    expect(employee.getEmail()).toBe(`<a href="mailto:test2@test.ca">test2@test.ca</a>`);
    expect(employee.getRole()).toBe('');
});



