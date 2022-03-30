// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const addHead = require('./add_head')
const titleCreator = require('./title_creator')

app.get("/", (request, response) => {
  response.send(`
    ${addHead}
    <body>
        <h1>My portfolio</h1>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
    
    ${addHead("Contact")}
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
    </body>
  `);
});

app.get("/education", (request, response) => {
  response.send(`
  ${addHead("Education")}
  <body>
        <h1>Education</h1>
    </body>
  `)
})

app.get("/skills", (request, response) => {
  response.send(`
  ${addHead("Skills")}
  <body>
        <h1>Skills</h1>
    </body>
  `)
})

app.get("/projects", (request, response) => {
  response.send(`
    
    ${addHead("Projects")}
    <body>
        <h1>Projects</h1>
        <p>This is a project page</p>
        <codeUrl>
        <previewUrl>
        <img>
    </body>
  `);
});

app.get('/test-report', function (requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
