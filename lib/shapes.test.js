const {Triangle, Square, Circle} = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with a background color", () => {
    const shape = new Triangle ();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});

describe("Square test", () => {
    test("test for a square with a background color", () => {
    const shape = new Square ();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />'
        );
    });
});

describe("Circle test", () => {
    test("test for a circle with a background color", () => {
    const shape = new Circle ();
    shape.setColor("#333");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#333" />' );
    });
});