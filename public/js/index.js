// $(addBurger).on("submit", handleFormSubmit);

$(function () {

    $(".addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("burger submit");
        //   var id = $(this).data("id");
        //   var burger_name = $(this).data("burger_name");
        //   var devoured = $(this).data("devoured");

        var newBurger = {
            burgername: $("#burger-name").val().trim(),
            devoured: FALSE,
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

    $(".devourButton").on("click", function (event) {
        
        var updateBurger = {
            burgername: $("#burger-name").val().trim(),
            devoured: TRUE,
            id: $(this).data("id")
        }
    
        // Send the PUT request.
        $.ajax("/updateOne/" + id, {
            type: "PUT",
            data: updateBurger
        }).then(
            function () {
                console.log("changed devoured to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    
  
});