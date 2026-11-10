const express = require('express'); // Importing express module.
const router = express.Router();    // Creating a router object to handle routes for express module.

// define the home page route
router.get('/', (req, res) => {
  res.send('Shop home page');
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About shop');
});

router.get('/product/:slug', (req, res) => {
  res.send(`fetch the product for ${req.params.slug}`);
});

module.exports = router;