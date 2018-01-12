var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// ?? table and col names using two ?? question marks, one ? means ....

var orm = {

    selectAll: function (whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
            console.log(result);
        });
    },
    insertOne: function (tableInput, ColOneName, ValColOne, ColTwoName, ValColTwo, ColThreeName, ValColThree) {
        var queryString = "INSERT INTO ?? VALUES ??, ??, ??";
        connection.query(queryString, [tableInput, ColOneName, ValColOne, ColTowName, ValColTwo, ColThreeName, ValColThree], function (err, result) {
            console.log(result);
        });
    },

    updateOne: function (table, colOneName, valColOne, colTwoName, valColTwo, id, idval) {
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
        connection.query(queryString, [table, colOneName, valColOne, id, idval], function (err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;