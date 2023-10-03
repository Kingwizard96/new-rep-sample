const inquirer = require(inquirer);
const fs = require("fs");
const { Triangle, Square, Circle } = require("./Develop/lib/shapes");

// function writes the svg file using user answers 
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    svgString += "<g>";
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150,18 244, 182 56,182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square"){
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<cirlce cx="150" cy"115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answer.textColor}">${answers.text}</text>`;
    svgString += "</g>"
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("generated logo.svg");
    });
}

function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            message:" what text would you like to display? (you can enter up to 3 characters)",
            name: 'text',
        },
        {
            type: "input",
            message:" Choose a text color? ",
            name: 'textColor',
        },
        {
            type: "list",
            message:"What shape would you like the logo to be?",
            choices: ["Triangle", "Square", "Circle"],
            name: 'shape',
        },  
        {
            type:'input',
            message:'choose shapes color (enter color)',
            name: "shapeBackgroundColor",
        },
    ])
    .then((answers) =>{
        if (answers.text.lenght > 3){
            console.log('you must enter a value no more than 3 characters');
            promptUser();
        } else {
            writeToFile('logo.svg', answers);
        }
    });
}

promptUser();