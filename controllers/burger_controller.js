var express = require("express");
var ormFunc = require("../models/burger.js");
// var ormFunc = require("ormFunc");


function router() {
    var app = new express.Router();

    // Home
    app.post("/insertOne", function (req, res) {
        console.log("insertOne");
        console.log(req.body);
        var date = new(Date);
        console.log (date);
        // you will call models/burger.js file ,method ormFunc.orm.insertOne(req.body.burger_name,req.body.devoured,date);
        ormFunc.insertOne(req.body.burgername,req.body.devoured,date);
    });
    
    // app.get("/selectAll", function (req, res) {
    //     console.log("SelectAll");
    //     ormFunc.orm.selectAll();
    // });
    
    app.put("/updateOne", function (req, res) {
        console.log("updateOne");
        ormFunc.updateOne(req.body.burgername,req.body.devoured,req.body.id);
    });

    return app;
};


module.exports = router;