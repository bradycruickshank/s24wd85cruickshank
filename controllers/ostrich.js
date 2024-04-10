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
exports.ostrich_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Ostrich.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Ostrich update form on PUT.
exports.ostrich_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Ostrich.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.age) toUpdate.age = req.body.age;
        if(req.body.feather_count) toUpdate.feather_count = req.body.feather_count;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
            failed`);
    }
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

// Handle a show one view with id specified by query
exports.ostrich_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Ostrich.findById( req.query.id)
        res.render('ostrichdetail',
            { title: 'Ostrich Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a ostrich.
exports.ostrich_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('ostrichcreate', { title: 'Ostrich Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a ostrich.
// query provides the id
exports.ostrich_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Ostrich.findById(req.query.id)
    res.render('ostrichupdate', { title: 'Ostrich Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.ostrich_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Ostrich.findById(req.query.id)
res.render('ostrichdelete', { title: 'Ostrich Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};