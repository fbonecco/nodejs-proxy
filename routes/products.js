var express = require('express');
var router = express.Router();
var request = require("request");
var productService = require("../services/productService.js");

/* GET products listing. */
router.get('/', function (req, res, next) {
  productService.getProducts(res.json);
});

module.exports = router;
