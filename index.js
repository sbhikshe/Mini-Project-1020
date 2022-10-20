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
    const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;

    fs.writeFile(filename, formatHTML(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
  });

  function formatHTML(data) {
    let htmlFile = `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>Portfolio</title>
          </head>
          <body class="bg-dark">
            <div class="jumbotron jumbotron-fluid">
            <div class="container bg-info">
              <h1 class="display-4">Hi! My name is ${data.name}</h1>
              <p class="lead">I am from ${data.location}.</p>
              <h3>About Me <span class="badge badge-secondary">Contact Me</span></h3>
          <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${data.gitHub}</li>
            <li class="list-group-item">LinkedIn: ${data.linkedIn}</li>
          </ul>
        </div>
      </div>
      </body>
      </html>`
    return htmlFile;
  }

  async function prompt() {
    let x = await inquirer.prompt();
    let y = await x.data;

    fs.writeFile(filename, formatHTML(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  }