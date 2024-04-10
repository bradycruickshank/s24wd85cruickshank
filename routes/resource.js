var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ostrich_controller = require('../controllers/ostrich');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// OSTRICH ROUTES ///
// POST request for creating a Ostrich.
router.post('/ostriches', ostrich_controller.ostrich_create_post);
// DELETE request to delete Ostrich.
router.delete('/ostriches/:id', ostrich_controller.ostrich_delete);
// PUT request to update Ostrich.
router.put('/ostriches/:id', ostrich_controller.ostrich_update_put);
// GET request for one Ostrich.
router.get('/ostriches/:id', ostrich_controller.ostrich_detail);
// GET request for list of all Ostrich items.
router.get('/ostriches', ostrich_controller.ostrich_list);

module.exports = router;
