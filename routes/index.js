const express = require('express');
const productsRoutes = require('./products');
const router = express.Router();

router.use('/', productsRoutes);

module.exports = router;
