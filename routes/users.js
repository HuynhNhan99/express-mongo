var express = require('express');
var router = express.Router();
const User = require('../models/user.model');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  // const newUser = await User.create(req.body);
  const user = new User(req.body);
  const result = await user.save()
  console.log(result);
  res.status(200).send(result);
})

module.exports = router;
