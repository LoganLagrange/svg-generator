const {Square, Circle, Triangle} = require(`./shapes`);

describe(`Square class`, () => {
    it("Creates a square with the correct color", () => {
        const testSquare = new Square(`blue`);
        expect(testSquare.render).toBe(`<rect x="75" y="25" width="150" height="150" stroke="blue" fill="blue"/>`)
    })
})

describe('Circle class', () => {
    it("Creates a circle with the correct color", () => {
        const testCircle = new Circle(`green`);
        expect(testCircle.render).toBe(`<circle cx="150" cy="100" r="75" stroke="green" fill="green"/>`)
    })
})

describe('Triangle class', () => {
    it("Creates a triangle with the correct color", () => {
        const testTriangle = new Triangle(`yellow`);
        expect(testTriangle.render).toBe(`<polygon points="150, 18 244, 182 56, 182" stroke="yellow" fill="yellow"/>`)
    })
})