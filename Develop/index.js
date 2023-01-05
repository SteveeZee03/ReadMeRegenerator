const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME =  ({projectName, description, installation, usage, license, contributing, tests, email, github,}) =>
` # ${projectName}
![Github License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
${description}
## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
Run the following commands below to install the required dependencies.  

${installation}


## Usage
Video Demonstration:
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contributing}
## Tests
Run the command below if you choose to run tests.

${tests}

## Questions
Any questions or concerns about this repo, feel free to contact me at ${email}.  You can also visit me at ${github}  to view more of my work.

`;

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description about your project',
        },
        {
            type:'input',
            name: 'installation',
            message:'What are the commands are needed to install the required dependicies?',
        },
        {
            type: 'input',
            name: 'usage',
            message:'Insert a link that demonstrates the use of the project',
        },
        {
            type: 'list',
            message:'What license is your project under?',
            name: 'license',
            choices:['MIT' , 'GPLv2' , 'Apache'],
        },
        {
            type: 'input',
            name:'contributing',
            message:'Enter all contributing members of your project.',
        },
        {
            type:'input',
            name: 'tests',
            message:'What are the commands are needed to run a test?',
        },
        {
            type:'input',
            name:'email',
            message:'Enter your email address.',
        },
        {
            type: 'input',
            name:'github',
            message:'Enter your GitHub Username.',
        },
    ])
    .then((answers) => {
        const READMEmdContent = generateREADME(answers);

        fs.writeFile('README.md', READMEmdContent,(err) =>
        err ? console.log(err) : console.log('Successfully created your README!'));
    }); 

