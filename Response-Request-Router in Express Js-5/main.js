const express = require('express');
const app = express()
const blog = require ('./routes/blog.js') // Importing the blog router module.
const shop = require ('./routes/shop.js') // Importing the shop router module.
const port = 3000


app.use(express.static('public')) // This will serve static files from the public directory.
app.use('/blog', blog) 
app.use('/shop', shop)

// Chaining of requests.
app.get('/', (req, res) => {
  console.log('Hey It\'s a get request')
  res.send('Hello World 21!')
})

app.post('/', (req, res) => {
  console.log('Hey It\'s a post request')
  res.send('Hello World post request!')
})


// Handling posts and other requests.

// app.put('/', (req, res) => {
//   console.log('Hey It\'s a put request')
//   res.send('Hello World put request!')
// })

// app.delete('/', (req, res) => {
//   console.log('Hey It\'s a delete request')
//   res.send('Hello World delete request!')
// })

// app.get("/index" , (req, res) => {
//   console.log('Hey It\'s Index')
//   res.send('Hello World Index!') // This will send the response to the client.
// })    

app.get("/index", (req, res) => {
  console.log('Hey It\'s Index')
  res.sendFile('templates/index.html', { root: __dirname }) // This will serve an html file.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Other methods of sending response to the client->

// 1)  app.get("/downloads", (req, res) => {
//  res.download('templates/index.html', 'index.html') // This will download the file to the client.
// })


// 2)  app.get('/endsession', (req, res) => {
//     res.write('Part 1 of the report...\n');
//     res.write('Part 2 of the report...\n');
//     res.end('Finalizing report.'); // Sends last chunk and closes stream and This will end the response to the client.
// })


app.get("/API", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, e: 5, name:["John Doe", "Alice Joe", "Bob Smith"] }) // This will serve a JSON response.
})

// 4) app.get("/jsonp", (req, res) => {
//   res.jsonp({ a: 1, b: 2, c: 3, d: 4, e: 5, name:["John Doe", "Alice Joe", "Bob Smith"] }) // This will serve a JSONP response.
// })

// 5) app.get("/redirect", (req, res) => {
//   res.redirect('https://www.nykaa.com') // This will redirect the client to the specified URL.
// })

app.get("/code", (req, res) => {
  res.status(140)
  res.send("Status code is 140") // This will send a response with status code 140.;
}); 