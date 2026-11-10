# What is a module?
- A borrowed piece of code that we can use in our script.

# Modules in node.js can be made in two different types-:

1) EcmaScript ES6 module
2) CommonJs module


# Commands used -
- npm init = npm init command initializes a new Node.js project by creating a package.json file in your current working directory, but involves user input and takes some time.

- npm init -y=  npm looks at your current folder name and generates a package.json.

- npm install --global nodemon - to install a tool that automatically restarts your Node.js application every time you save a code change.

- nodemon main.js - to run the js file after restarting.

- npm i express jsonwebtoken dotenv -> 

# Why we even use "npm i express jsonwebtoken dotenv"
- To simultaneously install three essential tools needed to build a secure, production-ready web application or API using Node.js.

1) express: A fast web framework for building server applications in Node.js.

2) jsonwebtoken: A tool to create and verify secure JSON Web Tokens for user login and authentication

3) .dotenv: A module that loads environment variables from a .env file into process.env.

# NVM-  (Node Version Manager)-> 
- a command-line utility used to easily install, switch between, and manage multiple versions of Node.js on a single computer.

# const fs = require('fs') 
- The keyword require is used to import module.
- require is a commonJs module.

# import http from "http";
- import is an ES6 module.

# Two types of export - 
- named
- default

# Modules come from this function -: 
- (function(exports, require, __dirname, __filename) {
     // module code actually lives in here, not in the global scope
  });