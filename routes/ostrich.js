var express = require('express');
var passport = require('passport')
const ostrich_controlers= require('../controllers/ostrich');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

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

/* GET create update page */
router.get('/update', secured, ostrich_controlers.ostrich_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    

/* GET delete ostrich page */
router.get('/delete', ostrich_controlers.ostrich_delete_Page);





