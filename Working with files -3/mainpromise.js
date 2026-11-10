import fs from 'fs/promises';

// let a = fs.readFile('marry.txt');
// console.log(a.toString());

// let b = await fs.writeFile('marry.txt', 'Mariyam can code!');
// console.log(b);

let c = await fs.appendFile('marry.txt', '\n\n\n\nShe wants to adopt one and name it as muezza');
console.log(c);