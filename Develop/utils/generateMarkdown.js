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
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Tests
${tests}

## License
<img src="https://img.shields.io/badge/license-${license}-blue" alt="badge-${license}" />

## Questions
If you have any questions, please visit the following:

GitHub username: ${gitHub}

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