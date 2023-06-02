const path = require('path');

const express = require('express');

const productcontroller=require('../Controllers/products')

const router = express.Router();

router.get('/',productcontroller.getproduct );

module.exports = router;
