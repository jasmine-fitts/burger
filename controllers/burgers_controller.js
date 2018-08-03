var express = require("express");
var router = express.Router();

//Imports the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

//Create routes and set up login with the route

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // sends backs the ID of the new burger
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id =" + req.params.id;
    console.log("condition", condition);

    bruger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
     });
});

//Export routes for sever.js to use
module.exports = router;