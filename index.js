const fs = require('fs');
const inquirer = require('inquirer');
const { join } = require('path');
const shapes = require('./lib/shapes.js')

const questions = [
    {
        type: 'input',
        message: 'Enter text for the logo (Must not be more than 3 characters)',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter a text color',
        name: 'color'
    },
    {
        type: 'list',
        message: "Select a shape for the logo",
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'Enter a color for the shape',
        name: 'shapecolor'
    }
]

inquirer
    .prompt(questions)
    .then((response) => {
        // logic here
    })
    .then((response) => {
        fs.writeFile('./logo.svg');
        console.log('Generated logo.svg')
    });