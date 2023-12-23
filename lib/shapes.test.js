const {Square, Circle, Triangle} = require(`./shapes`);

describe(`Square class`, () => {
    it("Creates a square with the correct color", () => {
        const testSquare = new Square(`blue`);
        const output = testSquare.render()
        expect(output).toBe(`<rect x="75" y="25" width="150" height="150" stroke="blue" fill="blue"/>`)
    })
})

describe('Circle class', () => {
    it("Creates a circle with the correct color", () => {
        const testCircle = new Circle(`green`);
        const output = testCircle.render()
        expect(output).toBe(`<circle cx="150" cy="100" r="75" stroke="green" fill="green"/>`)
    })
})

describe('Triangle class', () => {
    it("Creates a triangle with the correct color", () => {
        const testTriangle = new Triangle(`yellow`);
        const output = testTriangle.render();
        expect(output).toBe(`<polygon points="150, 18 244, 182 56, 182" stroke="yellow" fill="yellow"/>`)
    })
})