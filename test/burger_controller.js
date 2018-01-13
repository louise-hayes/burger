//This file tests the DB insert/read - acceptance testing
var assert = require('assert');
// const db = require('../models/')
// var express = require("express");
var ormFunc = require("../models/burger.js");


//test to check burger create model
// this function will act as if it is burger_controllers.js and run the ormFunc.insertOne method
// it tests orm.js, burger.js and if successfull will create a burger with name "chicken Burger"

describe('burger create test', function () {
    beforeEach(function () {});

    it('should show success if burger created with burger_name = "chicken burger"', function () {

        //mockup req,bod
        var req = {
            body: {
                "burgername": 'chicken burger',
                "devoured": 0,
                "date": '01/01/2018'
            }
        };
        var date = new(Date);
        console.log(date);

        // this will call models/burger.js file, method ormFunc.orm.insertOne(req.body.burger_name,req.body.devoured,date);
        ormFunc.insertOne([
                "burger_name", "devoured", "date"
            ], [
                req.body.burgername, req.body.devoured, date
            ],
            function (result) { //send back the ID of the new burger
                res.json({
                    id: result.insertId
                });
            });
            // .assert(result.burger.burger_name = "chicken burger");
    });

    it('should return a value of burger chicken burger id 1 should be devoured 1 if /updateOne route sucessfull ', function (finish) {
        //mockup req,bod
        var req = {
            params: {
                "id": 1,
                "devoured": 0
            }
        };
        // this will call models/burger.js file, method ormFunc.orm.insertOne(req.body.burger_name,req.body.devoured,date);
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
        ormFunc.updateOne({
            devoured : req.params.devoured
        }, condition, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                // return res.status(404).end();
            } else {
                // var results = {
                //     burger: result
                // }
                // console.log(result.burger);
                // res.render('index', results);
                // res.status(200).end();
            }
        });
        // .assert(result.burger.devoured = 1);
    });


});