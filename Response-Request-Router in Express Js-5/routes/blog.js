const express = require('express'); // Importing express module.
const router = express.Router();    // Creating a router object to handle routes for express module.

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page');
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog');
});

router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blog post for ${req.params.slug}`);
});

module.exports = router;