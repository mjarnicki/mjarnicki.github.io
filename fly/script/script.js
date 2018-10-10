$(function () {
    window.addEventListener("keypress", function (event) {

        var keyPressed = event.key;

        var horizontal = parseInt($("#plane").css("left"));
        var vertical = parseInt($("#plane").css("top"));
        var currentDirection;
        if (keyPressed == "w") {
            $("#plane").css({
                "top": (vertical - 20),
                "transform": "rotate(270deg)"
            });
            $("#fire").css({ "transform": "rotate(270deg) translate(10px, -10px)" });
        }

        else if (keyPressed == "s") {
            $("#plane").css({
                "top": (vertical + 20),
                "transform": "rotate(90deg)"
            });
            $("#fire").css({ "transform": "rotate(90deg) translate(10px, 9px)" });
        }

        else if (keyPressed == "a") {
            $("#plane").css({
                "left": (horizontal - 20),
                "transform": "rotate(180deg)"
            });
            $("#fire").css({ "transform": "rotate(180deg) translate(20px, -2px)" });
        }

        else if (keyPressed == "d") {
            $("#plane").css({
                "left": (horizontal + 20),
                "transform": "rotate(0deg)"
            });
            $("#fire").css({ "transform": "rotate(0deg) translate(0px, 0px)" });

        }

        if (keyPressed == "f") {
            $("#fire").css({
                "visibility": "initial",
                "left": horizontal,
                "top": vertical
            });
        }

        if (keyPressed == "g") {
            $("#fire").css({
                "visibility": "hidden",
                "left": horizontal,
                "top": vertical
            });
        }
        // if (currentDirection == "down") { }
        // else if (currentDirection == "up") { }
        // else if (currentDirection == "left") { }
        // else if (currentDirection == "right") { }



        if (horizontal < 0 || vertical < 0 || horizontal > 680 || vertical > 380) {
            $(".speedway").css({
                "background-image": "url(https://media.giphy.com/media/3o7aD4pR1HbHJFTBF6/giphy.gif)"
            });
            $("#plane").css({
                "display": "none"
            });
        }
    })
})