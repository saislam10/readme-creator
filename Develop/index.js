// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const utils = require("./utils/generateMarkdown");
const questions = [
    {
        type: 'input',
        name: 'repository',
        message: 'What is your the name of your repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your product?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the product?:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your product?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your product?',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What License was this created with?',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
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
// TODO: Create an array of questions for user input
// const init = async () => {
//     const data = await prompt([
//         {
//             type: 'input',
//             name: 'repository',
//             message: 'What is your the name of your repository?',
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'What is a description of your product?',
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'How do you install the product?:',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'How do you use your product?',
//         },
//         {
//             type: 'input',
//             name: 'contribution',
//             message: 'How can others contribute?',
//         },
//         {
//             type: 'input',
//             name: 'tests',
//             message: 'How do you test your product?',
//         },
//     ])
// // building readme document, using template literals
// // TODO: Create a function to write README file
// const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

// fs.writeFile(filename, JSON.stringify(data, null, 2), (err) =>
//     err ? console.log(err) : console.log('Success!')
//     );
// };
// // TODO: Create a function to initialize app

// // Function call to initialize app
// init();
