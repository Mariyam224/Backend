
// Think of it like ordering food at a restaurant:
// • req (Request) is what the customer (the browser) sends to the kitchen (the server). It is the order. It tells the server what the user wants (like a specific page, a username, or a password).
// • res (Response) is what the kitchen (the server) sends back to the customer (the browser). It is the food. It delivers the web page, the data, or the error message back to the user.

const express = require('express');
const app = express();
const port = 3000;


// Use the following code to serve images, CSS files, and JavaScript files in a directory named public:
// app.use(express.static('public')); 


// To use multiple static assets directories, call the express.static middleware function multiple times:

app.use(express.static('public'));
app.use(express.static('files'));   // serves files directly to the browser, and if the browser does not know how to display that specific file type natively, it will download it instead.



// // app.get or app.post or app.put or app.delete are used to define routes for different HTTP methods. In this case, we are defining a GET route for the root URL ('/').
// // arguments used (path, handler)

app.get('/world', (req, res) => {
  res.send('Hello World245!');
});

app.get('/About', (req, res) => {
  res.send('About Us');
});

app.get('/Contact', (req, res) => {
  res.send('Contact Us');
});

app.get('/Blog', (req, res) => {
  res.send('Welcome to Our Blog!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Instead of defining separate routes for each blog post, we can use a route parameter to handle multiple blog posts dynamically.

// app.get('/Blog/intro-to-javascript', (req, res) => {
//   res.send('Introduction to JavaScript');
// });

// app.get('/Blog/intro-to-Python', (req, res) => {
//   res.send('Introduction to Python');
// });

// How express handles the above problem->

app.get('/Blog/:slug', (req, res) => {

  // For URL: http://localhost:3000/Blog/intro-to-padosi?mode=dark&region=ind
  
  console.log(req.params); // will output { slug: 'intro-to-javascript' } or { slug: 'intro-to-Python' } depending on the URL accessed, it will fetch the value of slug from the URL and store it in req.params object.
  console.log(req.query); // will output mode: 'dark', region: 'ind', req.query will access values in ?mode=dark&region=ind 
 
  res.send(`hello ${req.params.slug}`);
 
});

// You can declare multiple route parameters in a single route. For example, if you want to handle blog posts by category and slug, you can define a route like this:

// app.get('/Blog/:slug/:second', (req, res) => {
//   res.send(`hello ${req.params.slug} and ${req.params.second}`)
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });