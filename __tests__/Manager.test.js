const Manager = require('../lib/Manager');

test('manager properties', () => {
    const manager = new Manager('Test7', 7000, 'test7@test.ca', 203);
    expect(manager.name).toBe('Test7');
    expect(manager.id).toBe(7000);
    expect(manager.email).toBe('test7@test.ca');
    expect(manager.role).toBe('Manager');
    expect(manager.getOffice()).toBe(203);
});

test("manager methods", () => {
    const manager = new Manager('Test8', 8000, 'test8@test.ca', 115);
    expect(manager.getName()).toBe('Test8');
    expect(manager.getId()).toBe(8000);
    expect(manager.getEmail()).toBe(`<a href="mailto:test8@test.ca">test8@test.ca</a>`);
    expect(manager.getRole()).toBe('Manager');
    expect(manager.getOffice()).toBe(115);
});
