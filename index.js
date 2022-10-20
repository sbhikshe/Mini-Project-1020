const inquirer = require('inquirer');
const fs = require('fs');

// name, location, bio, LinkedIn URL, and GitHub URL.
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your linkedIn url?',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'What is your github url?',
      name: 'gitHub',
    }
    
  ])
  .then((data) => {
    console.log(data);
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
  });
