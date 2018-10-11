'use strict';
const router = require('express').Router();

router.use('', require(''));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
