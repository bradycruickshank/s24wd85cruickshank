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
exports.ostrich_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Ostrich.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Ostrich create on POST.
exports.ostrich_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Ostrich();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"ostrich_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.age = req.body.age;
    document.feather_count = req.body.feather_count;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Ostrich delete from on DELETE.
exports.ostrich_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Ostrich delete DELETE ' + req.params.id);
};
// Handle Ostrich update form on PUT.
exports.ostrich_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Ostrich update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.ostrich_view_all_Page = async function(req, res) {
    try{
    theOstriches = await Ostrich.find();
    res.render('ostrich', { title: 'Ostrich Search Results', results: theOstriches });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };