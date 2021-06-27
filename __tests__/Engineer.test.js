const Engineer = require('../lib/Engineer');

test('engineer properties', () => {
    const engineer = new Engineer('Test3', 3000, 'test3@test.ca', 'Test3Github');
    expect(engineer.name).toBe('Test3');
    expect(engineer.id).toBe(3000);
    expect(engineer.email).toBe('test3@test.ca');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe(`Test3Github`);
});

test("engineer methods", () => {
    const engineer = new Engineer('Test4', 4000, 'test4@test.ca', 'Test4Github');
    expect(engineer.getName()).toBe('Test4');
    expect(engineer.getId()).toBe(4000);
    expect(engineer.getEmail()).toBe(`<a href="mailto:test4@test.ca">test4@test.ca</a>`);
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe(`<a href="https://github.com/Test4Github">Test4Github</a>`);
});

