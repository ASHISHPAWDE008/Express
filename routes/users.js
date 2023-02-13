var express = require('express');
var router = express.Router();
const _ = require('lodash');
const dummyUser = require('../utility/users-util');



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('default response');
});

router.get('/all', function (req, res, next) {
  res.send(dummyUser);
});

router.get('/groupedby/lastname', function (req, res, next) {
  const groupedUsers = _.groupBy(dummyUser, "Lname");
  res.send(groupedUsers);
});

router.get('/groupedby/:property', function (req, res, next) {
  const groupedUsers = _.groupBy(dummyUser, req.params.property);
  res.send(groupedUsers);
});

router.post('/saveuser', (req, res, next) => {
  const inputPayLoad = req.body;
  console.log("Input passed as", inputPayLoad);

  let cloneOfInput = { ...inputPayLoad };
  cloneOfInput.createdAt = new Date();
  res.send(cloneOfInput);

});
module.exports = router;
