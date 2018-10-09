$(function () {
    window.addEventListener("keypress", function (event) {

        var direction = event.key;

        var horizontal = parseInt($("#plane").css("left"));
        var vertical = parseInt($("#plane").css("top"));

        if (direction == "w") {
            $("#plane").css({
                "top": (vertical - 20),
                "transform": "rotate(270deg)"
            });
        }

        else if (direction == "s") {
            $("#plane").css({
                "top": (vertical + 20),
                "transform": "rotate(90deg)"
            });
        }

        else if (direction == "a") { 
            $("#plane").css({
                "left": (horizontal - 20),
                "transform": "rotate(180deg)"
        });
    }

        else if (direction == "d") { 
            $("#plane").css({
                "left": (horizontal + 20),
                "transform": "rotate(0deg)"
        });
    }

        // console.log(direction);

    })
})