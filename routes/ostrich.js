var express = require('express');
const ostrich_controlers= require('../controllers/ostrich');
var router = express.Router();

/* GET home page. */
router.get('/', ostrich_controlers.ostrich_view_all_Page );
module.exports = router;

/* GET detail ostrich page */
router.get('/detail', ostrich_controlers.ostrich_view_one_Page);
module.exports = router;

/* GET detail ostrich page */
router.get('/detail', ostrich_controlers.ostrich_view_one_Page);

/* GET create ostrich page */
router.get('/create', ostrich_controlers.ostrich_create_Page);

