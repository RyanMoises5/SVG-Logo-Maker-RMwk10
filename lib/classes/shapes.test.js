const { Triangle, Square, Circle } = require("../shapes.js")

// Tests to check if SVG code is correct as a result of user input

describe ('Circle test', () => {
    it('should provide SVG code for a circle with a black(#000000) background', () => {
        const shape = new Circle;
        shape.setColor("000000");

        const expected = `<circle cx="150" cy="100" r="80" fill="#000000" />`;

        expect(shape.render()).toEqual(expected);
    });
});

describe ('Triangle test', () => {
    it('should provide SVG code for a triangle with a red(#FF0000) background', () => {
        const shape = new Triangle;
        shape.setColor("FF0000");

        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="#FF0000" />`;

        expect(shape.render()).toEqual(expected);
    });
});

describe ('Square test', () => {
    it('should provide SVG code for a square with a pale goldenrod(#EEE8AA) background', () => { 
        const shape = new Square;
        shape.setColor("EEE8AA");

        const expected = `<rect width="150" height="150" x="75" y="25" fill="#EEE8AA" />`

        expect(shape.render()).toEqual(expected);
    });
});