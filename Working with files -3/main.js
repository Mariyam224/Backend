const fs = require('fs');
// console.log(fs);

console.log("Starting the application...");

// fs.writeFileSync('marry.txt', 'Hello, Mary! This is a test file.');

fs.writeFileSync('marry.txt', 'Hello, Mary! This is a test file.', () =>{
    console.log("Done");
});

fs.writeFile('marry2.txt', 'Mariyam has been stressed out.', () => {
    console.log("Done");
    fs.readFile('marry2.txt', (err, data) => {
        console.log(err, data.toString());
    })
})

fs.appendFile('marry.txt', '\n\n MarryRobo, botneseRojap.', (e, d) => {
    console.log(d);
})

console.log("File has been created successfully.");