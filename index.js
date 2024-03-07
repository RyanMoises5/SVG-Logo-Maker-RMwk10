const fs = require('fs');
const inquirer = require('inquirer');
const { join } = require('path');
const shapes = require('./lib/shapes.js')

inquirer.registerPrompt('maxlength-input', require('inquirer-maxlength-input-prompt'));

const getHex = async (getText) => {
    if (getText.color === 'Other') {
        let hex = await inquirer.prompt(
            {
                type: 'maxlength-input',
                message: 'Enter hex',
                name: 'color',
                maxLength: 6
            }) 
            
            return hex.color
        } 
    }

async function main() {
    let getText = await inquirer.prompt([
        {
            type: 'maxlength-input',
            message: 'Enter text for the logo (Up to 3 characters)',
            name: 'text',
            maxLength: 3
        },
        {
            type: 'list',
            message: 'Enter a text color',
            name: 'color',
            choices: ['Red','Green','Other']
        }
    ])

    let colorHex = await getHex(getText);
    getText.color = colorHex;

    console.log(getText);

    let getShape = await inquirer.prompt([
        {
            type: 'list',
            message: "Select a shape for the logo",
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'list',
            message: 'Enter a color for the shape',
            name: 'color',
            choices: ['Red','Green','Other']
        }
    ])

    let colorHexShape = await getHex(getShape);
    getShape.color = colorHexShape;

    console.log(getShape);
}

main()