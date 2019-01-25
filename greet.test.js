const greet = require('./greet');

test('1.Write a method greet(name)', () => {
    expect(greet("Bob"));
}); 

test('2.When name is "Bob", the method should return a string "Hello, Bob."', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('3.name is null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe("Hello, my friend.");
});

test('4.when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test('5.when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () => {
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

test('6.when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});

test('7.when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test('8.when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne."', () => {
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
});

test('9.when name is ["Bob", ""Charlie, Dianne""], then the method should return the string "Hello, Bob and Charlie, Dianne."', () => {
    expect(greet(["Bob", '""Charlie, Dianne""'])).toBe("Hello, Bob and Charlie, Dianne.");
});







