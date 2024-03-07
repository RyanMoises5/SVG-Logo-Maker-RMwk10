const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes.js');

inquirer.registerPrompt('maxlength-input', require('inquirer-maxlength-input-prompt'));

// Gathers user's preferred color hex code or translates a keyword into a hex code
const getHex = async (e) => {
    if (e.color === 'Other (Use Hex)') {
        let hex = await inquirer.prompt(
            {
                type: 'maxlength-input',
                message: 'Enter hex-code for preferred color',
                name: 'color',
                maxLength: 6
            }) 
            return hex.color

        } else if (e.color === 'Red') {
            return 'FF0000'
        } else if (e.color === 'Green') {
            return '008000'
        } else if (e.color ==='Yellow') {
            return 'FFFF00'
        } else if (e.color === 'Blue') {
            return '0000FF'
        } else if (e.color === 'Purple') {
            return 	'800080'
        } else if (e.color ==='Orange') {
            return 'FFA500'
        } else if (e.color ==='White') {
            return 'FFFFFF'
        } else if (e.color ==='Black') {
            return '000000'
        }
    }

const colorChoices = ['Other (Use Hex)','Red','Green','Yellow','Blue','Purple','Orange','White','Black'];

function writeToFile(fileName, input) {

    let svg = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    `
    let shapeChoice;
    if (input.shape === 'Circle') {
        shapeChoice = new Circle;
        shapeChoice.setColor(input.shapeColor);
    } else if (input.shape === 'Square') {
        shapeChoice = new Square;
        shapeChoice.setColor(input.shapeColor);
    } else if (input.shape === 'Triangle') {
        shapeChoice = new Triangle
        shapeChoice.setColor(input.shapeColor);
    }

    svg += shapeChoice.render();

    svg += `
    
    <text x="150" y="125" text-anchor="middle" font-size="60" font-weight="bold" fill="#${input.color}">${input.text}</text>
    
    </svg>`;

    fs.writeFile(
      fileName,
      svg,
      (err) => err ? console.log(err) : console.log('Generated '+ fileName)
      )
    }

async function main() {
    // Prompts for text and text color
    let text = await inquirer.prompt([      
        {
            type: 'maxlength-input',
            message: 'Enter text for the logo (Up to 3 characters)',
            name: 'item',
            maxLength: 3
        },
        {
            type: 'rawlist',
            message: 'Enter a text color',
            name: 'color',
            choices: colorChoices
        }
    ])
    // Gathers hex color code from user or translate keyword into hex color code
    let colorHex = await getHex(text);      

    // Prompts for shape and shape color
    let shape = await inquirer.prompt([     
        {
            type: 'list',
            message: "Select a shape for the logo",
            name: 'item',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'rawlist',
            message: 'Enter a color for the shape',
            name: 'color',
            choices: colorChoices
        }
    ])
    // Gathers hex color code from user or translate keyword into hex color code
    let colorHexShape = await getHex(shape);        

    // Consolidates user inputs and hex codes into one input object
    const input = {
        text: text.item,
        color: colorHex,
        shape: shape.item,
        shapeColor: colorHexShape
    };

    // Generates SVG file using properties stored in input object
    writeToFile('logo.svg', input);
}

main();