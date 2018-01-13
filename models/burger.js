var orm = require("../config/orm.js");

var ormFunc = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },


    insertOne: function (cols, vals, cb) {

        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    },

// objColVals=devoured: 1
// condition: "id = " + req.params.id;

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(result) {
          cb(result);
        })
    },

};

module.exports = ormFunc;