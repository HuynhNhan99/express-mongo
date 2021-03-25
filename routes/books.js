var express = require('express');
var router = express.Router();
const Book = require('../models/book.model');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const books = await Book.find();
  res.json(books);
});

router.post('/', async (req, res) => {
  // const newUser = await User.create(req.body);
  const book = new Book(req.body);
  const result = await book.save()
  console.log(result);
  res.status(200).send(result);
})

module.exports = router;
