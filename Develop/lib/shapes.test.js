const {Triangle, Square, Circle} = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with a background color", () => {
    const shape = new Triangle ();
    shape.setColor('red');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56,182" fill="red" />'
        );
    });
});

describe("Square test", () => {
    test("test for a square with a background color", () => {
    const shape = new Square ();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56,182" fill="blue" />'
        );
    });
});

describe("Circle test", () => {
    test("test for a circle with a background color", () => {
    const shape = new Circle ();
    shape.setColor('purple');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56,182" fill="purple" />'
        );
    });
});
