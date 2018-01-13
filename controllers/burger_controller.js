var express = require("express");
var ormFunc = require("../models/burger.js");
// var ormFunc = require("ormFunc");


function router() {
    var app = new express.Router();

    // Home 
    app.get("/", function (req, res) {
        console.log("showallburgers");

        ormFunc.selectAll(function(data) {
            var hbsObject = {
              burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/insertOne", function (req, res) {
        var date = new(Date);
        // date = getDate(date);
        console.log(date);
        // you will call models/burger.js file ,method ormFunc.orm.insertOne(req.body.burger_name,req.body.devoured,date);
        ormFunc.insertOne([
                "burger_name", "devoured", "date"
            ], [
                req.body.burgername, req.body.devoured, date
            ],
            function (result) { //send back the ID of the new burger
                res.json({
                    id: result.insertId
                });

            })
    });

    app.put("/updateOne/:id", function (req, res) {
        console.log("updateOne");
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
        console.log("devoured", req.body.devoured);

        ormFunc.updateOne({
                devoured: req.body.devoured
            }, condition, function (result) {
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    // var results = {
                    //     burger: result
                    // }
                    // console.log(result.burger);
                    // res.render('index', results);
                    res.status(200).end();
                }
            });
    });

return app;

};


module.exports = router;