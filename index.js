// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const { inherits } = require('util');

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your repo title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter table of contents',
        name: 'table_of_contents',
    },
    {
        type: 'input',
        message: 'How to install?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Usage',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Enter Licence',
        name: 'license',
        choices: ['--','MIT', 'Apache', 'unlicensed']
    },
    {
        type: 'input',
        message: 'Enter about contributing',
        name: 'cotributing',
    },
    {
        type: 'input',
        message: 'Enter about tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Contact information',
        name: 'Question',
    },
    {
        type: 'list',
        message: 'What language does this use?',
        name: 'language',
        choices: ['html', 'css','javascript']
    },
])
.then((answer) => {
    console.log(answer)

    const renderABadge = (language) => {
        return `![${answer.language}](https://img.shields.io/badge/language-$%7Blanguage%7D-yellow)`
    }


    const renderlicenseBadge = (license) => {
        return `![${answer.license}](https://img.shields.io/badge/license-%24%7Blicense%7D-green)`
      } 


const string = `# 🏗️ ${answer.title}
## Description
    
${answer.description}

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installatin](#installation)
- [Usage](#usage)
- [Licens](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [How to ask Question](#Questions)
- [Language](#language)

## Installation

${answer.installation}

## Usage

${answer.usage}

## License
${renderlicenseBadge(answer.license)}


## Contributing

${answer.contributing}

## Tests

${answer.tests}


## How to ask questions
GitHub User Name : KumiYAM ("https://github.com/KumiYAM')




## Language

${renderABadge(answer.language)}`


    fs.writeFile('README.md', string, (error) => {
      if (error) throw error
      else console.log('success')
    });
  })


// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
/*fs. writeToFile('README.md', dataInApp, (err) => {
    if (err) {
        console.log(err)
    }
    else { console.log('wrote to file')} 
});

fs.appendFile('README.md', dataInApp, (err) => {
   
    if (err) {
        console.log(err)
    }
    else { console.log('appended to file')}
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init()
*/