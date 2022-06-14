// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const init = async () => {
    const data = await prompt([
        {
            type: 'input',
            name: 'repository',
            message: 'Description:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contributions:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests:',
        },
    ])
// building readme document, using template literals
// TODO: Create a function to write README file
const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

fs.writeFile(filename, JSON.stringify(data, null, 2), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
};
// TODO: Create a function to initialize app

// Function call to initialize app
init();
