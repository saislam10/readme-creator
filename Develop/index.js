const inquirer = require('inquirer');
const utils = require("./utils/generateMarkdown");
const questions = [
    {
        type: 'input',
        name: 'repository',
        message: 'What is the title of your project/repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What License was this project created under?',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "BSD",
        ]
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
]
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateMarkdown(answers);
}
)