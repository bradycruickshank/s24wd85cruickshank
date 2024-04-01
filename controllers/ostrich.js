var Ostrich = require('../models/ostrich');
// List of all ostriches
exports.ostrich_list = async function(req, res) {
    try{
        theOstriches = await Ostrich.find();
        res.send(theOstriches);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};

// for a specific Ostrich.
exports.ostrich_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Ostrich detail: ' + req.params.id);
};
// Handle Ostrich create on POST.
exports.ostrich_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Ostrich create POST');
};
// Handle Ostrich delete from on DELETE.
exports.ostrich_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Ostrich delete DELETE ' + req.params.id);
};
// Handle Ostrich update form on PUT.
exports.ostrich_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Ostrich update PUT' + req.params.id);
};