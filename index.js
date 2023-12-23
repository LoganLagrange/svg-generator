const fs = require(`fs`);
const inquirer = require(`inquirer`);
const {Square, Circle, Triangle} = require(`./lib/shapes`);

inquirer
    .prompt([
        {
            type: `input`,
            message: `Please enter up to three letters for the logo.`,
            name: `text`
        },
        {
            type: `input`,
            message: `What color would you like the text to be? (keyword or hex code)`,
            name: `textColor`
        },
        {
            type: `list`,
            message: `What shape would you like the background to be?`,
            name: `shape`,
            choices: [`Square`, `Circle`, `Triangle`]
        },
        {
            type: `input`,
            message: `What color would you like the shape to be? (keyword or hex code)`,
            name: `shapeColor`
        }
    ]).then((res) => {
        const svgOutput = createSvg(res.text, res.textColor, res.shape, res.shapeColor)
        writeToFile(`./output/logo.svg`, svgOutput);
    })

function createSvg(text, textColor, shape, shapeColor) {
    if(shape === `Square`)  {
        const newSquare = new Square(shapeColor);
        const squareOutput = newSquare.render();
        const svgOutput = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white" />
        ${squareOutput}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`
      return svgOutput;
    }else if(shape === `Circle`) {
        const newCircle = new Circle(shapeColor);
        const circleOutput = newCircle.render();
        const svgOutput = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white" />
        ${circleOutput}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`
      return svgOutput;
    } else {
        const newTriangle = new Triangle(shapeColor);
        const TriangleOutput = newTriangle.render();
        const svgOutput = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white" />
        ${TriangleOutput}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`
      return svgOutput;
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(`Generated logo.svg, check output folder.`));
}