
$(function () {
    var ammo = 9999;
    var readyToFire = true;
    var loss = 0;
    $("#ammo").text(ammo);

    for (var i = 1; i <= 5; i++) {
        $(".speedway").append('<div class="target" id="launch' + i + '"></div>')

        var randomHorizontal = (Math.round(Math.random() * 23) * 30) + "px";
        var randomVertical = (Math.round(Math.random() * 13) * 30) + "px";

        $("#launch" + i).css({
            "left": randomHorizontal,
            "top": randomVertical
        })
    }



    window.addEventListener("keypress", function (event) {

        var keyPressed = event.key;
        var horizontal = parseInt($("#plane").css("left"));
        var vertical = parseInt($("#plane").css("top"));

        // buttons
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
        // movement
        function direction(currentDirection) {
            if (currentDirection == "up") {
                $("#plane").animate({
                    top: (vertical - 30),
                    step: function () {
                        $(this).css('transform', 'rotate(180deg)');
                    }
                }
                    , 200, "linear");
            }
            else if (currentDirection == "down") {
                $("#plane").animate({
                    "top": (vertical + 30),
                    "transform": "rotate(0deg)"
                }, 200, "linear");
            }
            else if (currentDirection == "left") {
                $("#plane").animate({
                    "left": (horizontal - 30),
                    "transform": "rotate(90deg)"
                }, 200, "linear");
            }
            else if (currentDirection == "right") {
                $("#plane").animate({
                    "left": (horizontal + 30),
                    "transform": "rotate(270deg)"
                }, 200, "linear");
            }
            way = currentDirection;
        }
        // fire
        function fire(whereToFire) {
            if (ammo > 0 && readyToFire == true) {
                ammo--
                $("#fire").css({
                    "left": horizontal,
                    "top": vertical,
                    "visibility": "visible"
                }).attr("src", "https://mjarnicki.github.io/fly/img/rockets.png");
                readyToFire = false;

                if (whereToFire == "up") {
                    $("#fire").css({ "transform": "rotate(270deg) translate(0px, -30px)" }).animate(
                        { top: "0px" }, (vertical * 3), "linear", function () { explosion() }
                    );
                }
                else if (whereToFire == "down") {
                    $("#fire").css({ "transform": "rotate(90deg) translate(0px, 30px)" }).animate(
                        { top: "390px" }, ((400 - vertical) * 3), "linear", function () { explosion() }
                    );
                }
                else if (whereToFire == "left") {
                    $("#fire").css({ "transform": "rotate(180deg) translate(30px, 0px)" }).animate(
                        { left: "0px" }, ((horizontal) * 3), "linear", function () { explosion() }
                    );
                }
                else if (whereToFire == "right") {
                    $("#fire").css({ "transform": "rotate(0deg) translate(-30px, 0px)" }).animate(
                        { left: "690px" }, ((700 - horizontal) * 3), "linear", function () { explosion() }
                    );
                };
                $("#ammo").text(ammo);
            }
            function explosion() {
                loss++;
                $("#fire").attr("src", "https://rostfriblog.files.wordpress.com/2016/02/baked-potato-explosion.gif?w=756");
                var exposionHorizontal = $("#fire").css("left");
                var exposionVertical = $("#fire").css("top");
                setTimeout(function () {
                    $('#fire').attr('src', "")
                    $(".speedway").append('<img class="hit" id="loss' + loss + '" src="img/fire.gif" alt="">')
                    $("#loss" + loss).css({
                        "left": exposionHorizontal,
                        "top": exposionVertical
                    })
                }, 900)
                readyToFire = true;
            }
        }

        if (horizontal < 0 || vertical < 0 || horizontal > 720 || vertical > 420) {
            $(".speedway").css({
                "background-image": "url(https://media.giphy.com/media/3o7aD4pR1HbHJFTBF6/giphy.gif)"
            });
            $("#plane").css({
                "display": "none"
            });
        }
    })
})

