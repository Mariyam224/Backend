// const { createServer } = require('node:http');
// const fs = require('node:fs');     // commonjs module

// import http from 'node:http'; // ecmascript module

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a, b, c, d, e} from './mymodule.js'; // importing a variable from mymodule.js file
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// import obj from './mymodule.js'; // importing default export from mymodule.js file
// console.log(obj.x);
// console.log(obj.y);

// // obj can also be imported as marry or other variable name, but it will still refer to the default export from mymodule.js file example:

// import marry from './mymodule.js'; // importing default export from mymodule.js file
// console.log(marry);




const a = require('./mymodule2.js'); // importing a variable from mymodule2.js file
console.log(a, __dirname); // double underscore has  been  used to get the current directory name of the file being executed. 
console.log(__filename); // double underscore has  been  used to get the current file name of the file being executed.

// Above code has been parsed from this function-:

(function(exports, require, module, __filename, __dirname) {   

    // module code actually lives here 
})

