var express = require('express');
const ostrich_controlers= require('../controllers/ostrich');
var router = express.Router();

/* GET home page. */
router.get('/', ostrich_controlers.ostrich_view_all_Page );
module.exports = router;
