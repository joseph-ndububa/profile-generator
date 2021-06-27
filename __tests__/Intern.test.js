const Intern = require('../lib/Intern');

test('intern properties', () => {
    const intern = new Intern('Test5', 5000, 'test5@test.ca', 'U of T');
    expect(intern.name).toBe('Test5');
    expect(intern.id).toBe(5000);
    expect(intern.email).toBe('test5@test.ca');
    expect(intern.role).toBe('Intern');
    expect(intern.getSchool()).toBe(`U of T`);
});

test("intern methods", () => {
    const intern = new Intern('Test6', 6000, 'test6@test.ca', 'York University');
    expect(intern.getName()).toBe('Test6');
    expect(intern.getId()).toBe(6000);
    expect(intern.getEmail()).toBe(`<a href="mailto:test6@test.ca">test6@test.ca</a>`);
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('York University');
});
