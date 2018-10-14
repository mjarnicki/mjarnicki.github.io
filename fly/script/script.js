$(function () {
    window.addEventListener("keypress", function (event) {

        var keyPressed = event.key;

        var horizontal = parseInt($("#plane").css("left"));
        var vertical = parseInt($("#plane").css("top"));


        if (keyPressed == "w") {
            direction("up")
        }
        else if (keyPressed == "s") {
            direction("down")
        }
        else if (keyPressed == "a") {
            direction("left")
        }
        else if (keyPressed == "d") {
            direction("right")
        }
        else if (keyPressed == "f") {
            fire(way);
        }

        function direction(currentDirection) {
            if (currentDirection == "up") {
                $("#plane").css({
                    "top": (vertical - 30),
                    "transform": "rotate(180deg)"
                });
            }
            else if (currentDirection == "down") {
                $("#plane").css({
                    "top": (vertical + 30),
                    "transform": "rotate(0deg)"
                });
            }
            else if (currentDirection == "left") {
                $("#plane").css({
                    "left": (horizontal - 30),
                    "transform": "rotate(90deg)"
                });
            }
            else if (currentDirection == "right") {
                $("#plane").css({
                    "left": (horizontal + 30),
                    "transform": "rotate(270deg)"
                });
            }
            way = currentDirection;
        }

        function fire(whereToFire) {
            $("#fire").css({
                "left": horizontal,
                "top": vertical,
                "visibility": "visible"
            }).attr("src","https://mjarnicki.github.io/fly/img/rockets.png");
            if (whereToFire == "up") {
                $("#fire").css({ "transform": "rotate(270deg) translate(0px, -30px)" }).animate(
                    { top: "0px" }, (vertical * 3), "linear", function(){ $("#fire").attr("src","https://rostfriblog.files.wordpress.com/2016/02/baked-potato-explosion.gif?w=756");}
                );
            }
            else if (whereToFire == "down") {
                $("#fire").css({ "transform": "rotate(90deg) translate(0px, 30px)" }).animate(
                    { top: "380px" }, ((400 - vertical) * 3), "linear", function(){ $("#fire").attr("src","https://rostfriblog.files.wordpress.com/2016/02/baked-potato-explosion.gif?w=756");}
                );
            }
            else if (whereToFire == "left") {
                $("#fire").css({ "transform": "rotate(180deg) translate(30px, 0px)" }).animate(
                    { left: "0px" }, ((horizontal) * 3), "linear", function(){ $("#fire").attr("src","https://rostfriblog.files.wordpress.com/2016/02/baked-potato-explosion.gif?w=756");}
                );
            }
            else if (whereToFire == "right") {
                $("#fire").css({ "transform": "rotate(0deg) translate(-30px, 0px)" }).animate(
                    { left: "680px" }, ((700 - horizontal) * 3), "linear", function(){ $("#fire").attr("src","https://rostfriblog.files.wordpress.com/2016/02/baked-potato-explosion.gif?w=756");}
                );
            };
        }

        if (horizontal < 0 || vertical < 0 || horizontal > 680 || vertical > 380) {
            $(".speedway").css({
                "background-image": "url(https://media.giphy.com/media/3o7aD4pR1HbHJFTBF6/giphy.gif)"
            });
            $("#plane").css({
                "display": "none"
            });
        }
    })
    Gifffer();
})