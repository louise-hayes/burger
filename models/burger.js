var orm = require("../config/orm.js");

var ormFunc = {


    selectAll: function (burger_name, cb) {
        orm.selectAll(burger_name, burgers, function (res) {
            cb(res);
        })
    },


    insertOne: function (burger_name, devoured, date) {
        orm.insertOne("burgers", "burger_name", burgername, "devoured", deVoured, "timestamp", date, function (res) {
            cb(res);
        })
    },

    updateOne: function (devoured, id, cb) {
        orm.updateOne("burgers", "devoured", deVoured, "id", idVal, function (res) {
            cb(res);
        })
    },

};

module.exports = ormFunc;