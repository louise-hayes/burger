// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $("#addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("burger submit");
        //   var id = $(this).data("id");
        //   var burger_name = $(this).data("burger_name");
        //   var devoured = $(this).data("devoured");

        var newBurger = {
            burgername: $("#burger-name").val().trim(),
            devoured: 0,
            id: $(this).data("id")
        }
        // Send the POST request.
        $.ajax("/insertOne", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newBurgerState = {
            devoured: 1
        }

        // Send the PUT request.
        $.ajax("/updateOne/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                // console.log("changed devoured to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});