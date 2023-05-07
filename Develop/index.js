// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
    },
    {
        type: "input",
        name: "description",
        message: "Please, write a description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please, include installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your app? Please, provide screenshots as an example."
    },
    {
        type: "list",
        name: "license",
        message: "What license did you used?",
        choices: ["The MIT License", "The GPL License", "Apache License", "GNU License", "N/A"]
    },
    {
        type: "input",
        name: "contribution",
        message: "Please, provide guidelines for how to contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please, provide example on tests and how to run them."
    },
    {
        type: "input",
        name: "questions",
        message: "Please, provide questions."
    },
    {
        type: "input",
        message: "GitHub username:",
        name: "git"
    },
    {
        type: "input",
        message: "E-mail:",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        fs.writeFileSync("test.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
