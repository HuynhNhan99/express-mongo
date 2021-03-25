var express = require('express');
var router = express.Router();
const Author = require('../models/author.model');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const books = await Author.find();
  res.json(books);
});

router.post('/', async (req, res) => {
  // const newUser = await User.create(req.body);
  const author = new Author(req.body);
  const result = await author.save()
  console.log(result);
  res.status(200).send(result);
})

module.exports = router;
