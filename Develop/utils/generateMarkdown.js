const fs = require('fs');
const { ReadMe } = require('lodash');

const generateMarkdown = ({
  repository,
  description,
  installation,
  usage,
  contribution,
  tests,
  license,
  gitHub,
  email
})=> {
  console.log('GENERATING PAGE…');
  const ReadMe = (
    `
# ${repository}

# Table of Contents
1. [Description](#description)
2. [License](#license)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${description}

## License

This application is covered under the ${license} license.

<img src="https://img.shields.io/badge/license-${license}-blue" alt="badge-${license}" />


## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${tests}

## License

This application is covered under the ${license} license.

<img src="https://img.shields.io/badge/license-${license}-blue" alt="badge-${license}" />

## Questions
If you have any further questions, please visit my GitHub profile or email me:

GitHub: https://github.com/${gitHub}

Email: ${email}

    `
  );
  fs.writeFileSync('./output/README.md', ReadMe);
  console.log('ReadMe GENERATED!');
  process.exit();
};

module.exports = {
  generateMarkdown
};