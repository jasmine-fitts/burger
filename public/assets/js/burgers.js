$(function() {
    $("#submit").on("click", function(event) {
        var burger = {
            burger_name: $("#burger-input").val().trim()
        };
        console.log(burger);
        $.ajax("/api/burgers", {
            type: "POST", 
            data: burger
        }).then(function() {
            console.log("New burger added");
            location.reload();
        });
    });

    $(".delburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var burgerDevoured = $(this).data("devoured");

        console.log(burgerDevoured);

        if (burgerDevoured === 0) {
            burgerDevoured = 1; 
            $.ajax("api/burgers" + id, {
                type: "PUT", data: burgerDevoured
            }).then(function() {
                console.log("Devoured")
            });

        }
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var burger = {
            
        }
    })
});
