//  What is Middleware in Express.js?
// Middleware is a function that runs before evry request to the server. 

const express = require('express');  // Import the express module
const app = express(); // Creates the application object
const fs = require('fs'); // Import the file system module to write logs to a file
const path = require('path'); // Import the path module to work with file and directory paths
const blog = require('./routes/blog'); // Import the blog router module

const port = 3000; // Define the port number on which the server will listen

// app.use(express.static('public')); // Serve static files from the 'public' directory

app.use('/blog', blog); // Use the blog router for routes starting with '/blog'

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Middleware -1: Logger for our application

app.use((req, res, next) => {

  // console.log('M1');
  // console.log(`${Date.now()} is a ${req.method} request.`);

  console.log(req.headers); // Log the request headers to the console
  req.marry = "I am Mariyam Imran"; // Add a custom property to the request object

  // Moving a new file-> log.txt in a public folder
  const logFilePath = path.join(__dirname, 'public', 'log.txt'); // Define the path to the log file in the public folder
  

  fs.appendFileSync(logFilePath, `${Date.now()} is a ${req.method} request.\n`); // Append log to log.txt file in public folder

  // res.send("Hacked by M1") // req-res cycle will stop here and will not go to the next middleware or route handler, 
  // Once the response has been sent, the request-response cycle is complete, and the next middleware or route handler will not be executed.

  next(); // Pass control to the next middleware function

});


// Middleware -2
app.use((req, res, next) => {
  req.marry = "I am Mariyam's Sister"
  console.log('M2');
  next();
});


app.get('/about', (req, res) => {
  res.send('Hello About!' + req.marry);
});

app.get('/contact', (req, res) => {
  res.send('Hello Contact!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});