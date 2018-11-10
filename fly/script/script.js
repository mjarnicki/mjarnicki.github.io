$(function () {
    var ammo = 15;
    var readyToFire = true;
    var readyToMove = true;
    var destroyed = 0
    var way;
    var horizontalCoordinates = [];
    var verticalCoordinates = [];
    var clock;
    var sec = 0;
    $("#ammo").text(ammo);

    //creation of targets
    for (var i = 1; i <= 5; i++) {
        $(".speedway").append('<div class="target" id="tank' + i + '"></div>')

        var randomHorizontal = (Math.round(Math.random() * 23) * 30) + "px";
        var randomVertical = (Math.round(Math.random() * 18) * 30) + "px";

        $("#tank" + i).css({
            "left": randomHorizontal,
            "top": randomVertical
        })
        //target coordinates
        horizontalCoordinates.push(randomHorizontal);
        verticalCoordinates.push(randomVertical);
    }
//star button
    $(".start-button").on("click", function(){
        $(".start-screen").css("display", "none")
        timerStart()
    })
    
	function timerStart()
	{
		clock = setInterval(function(){timer()}, 1000);
	}
	function timer()
	{
		sec++;
		var tenSec = Math.floor(sec/10);
		var min = Math.floor(sec/60);
		var time = "0" + min + ":" + (tenSec-(min*6)) + (sec-(tenSec*10));
		document.getElementById("score").innerHTML = time;
		document.getElementById("timer").innerHTML = time;
	}

    window.addEventListener("keyup", function (event) {

        var keyPressed = event.key;
        var horizontal = parseInt($("#plane").css("left"));
        var vertical = parseInt($("#plane").css("top"));

        // buttons
        if (keyPressed == "w" && readyToMove == true) {
            direction("up")
        }
        else if (keyPressed == "s" && readyToMove == true) {
            direction("down")
        }
        else if (keyPressed == "a" && readyToMove == true) {
            direction("left")
        }
        else if (keyPressed == "d" && readyToMove == true) {
            direction("right")
        }
        else if (keyPressed == "f") {
            fire(way);
        }
        // movement
        function direction(currentDirection) {
            readyToMove = false;
            if (currentDirection == "up") {
                $("#plane").animate({
                    top: (vertical - 30)
                }, 80, "linear", function () {
                    setTimeout(function () {
                        readyToMove = true
                    }, 100)
                }).removeClass().addClass("up");
            }
            else if (currentDirection == "down") {
                $("#plane").animate({
                    "top": (vertical + 30)
                }, 100, "linear", function () {
                    setTimeout(function () {
                        readyToMove = true
                    }, 100)
                }).removeClass().addClass("down");
            }
            else if (currentDirection == "left") {
                $("#plane").animate({
                    "left": (horizontal - 30)
                }, 80, "linear", function () {
                    setTimeout(function () {
                        readyToMove = true
                    }, 100)
                }).removeClass().addClass("left");
            }
            else if (currentDirection == "right") {
                $("#plane").animate({
                    "left": (horizontal + 30)
                }, 80, "linear", function () {
                    setTimeout(function () {
                        readyToMove = true
                    }, 100)
                }).removeClass().addClass("right");
            }
            way = currentDirection;
            console.log("top" + vertical + " left" + horizontal + " ilosc celów" + horizontalCoordinates.length)
        //condition of victory
            if (((horizontal == 30) || (horizontal == 0)) && ((vertical == 30) || (vertical == 0)) && (horizontalCoordinates.length == 0)){
                setTimeout(function () {
                    $(".end-screen").css("display", "block")
                    clearInterval(clock);
                }, 200)
            }
        }

        function fire(whereToFire) {

            if (ammo > 0 && readyToFire == true) {
                ammo--
                $("#fire").css({
                    "left": horizontal,
                    "top": vertical,
                    "visibility": "visible"
                }).attr("src", "https://mjarnicki.github.io/fly/img/rockets.png");
                readyToFire = false;
     // fire up
                if (whereToFire == "up") {
                    var hitUp = 0;
                    function fireUp(target) {
                        $("#fire").css({ "transform": "rotate(270deg) translate(0px, -30px)" }).animate(
                            { top: target }, ((vertical - target) * 3), "linear", function () { explosion() }
                        );
                    }
                    for (var i = 0; i < 5; i++) {
                        if ((parseInt(horizontalCoordinates[i]) == horizontal) && (parseInt(verticalCoordinates[i]) < vertical)) {
                            fireUp(parseInt(verticalCoordinates[i]));
                            horizontalCoordinates.splice(i, 1);
                            verticalCoordinates.splice(i, 1);
                            hitUp++;
                            $("#targets-to-destroy").text(horizontalCoordinates.length);
                            break;
                        }
                    }
                    if (hitUp == 0) { fireUp(0); }
                }
     // fire down
                else if (whereToFire == "down") {
                    var hitDown = 0;
                    function fireDown(target) {
                        $("#fire").css({ "transform": "rotate(90deg) translate(0px, 30px)" }).animate(
                            { top: target }, ((target - vertical) * 3), "linear", function () { explosion() }
                        );
                    }
                    for (var i = 0; i < 5; i++) {
                        if ((parseInt(horizontalCoordinates[i]) == horizontal) && (parseInt(verticalCoordinates[i]) > vertical)) {
                            fireDown(parseInt(verticalCoordinates[i]));
                            horizontalCoordinates.splice(i, 1);
                            verticalCoordinates.splice(i, 1);
                            hitDown++;
                            $("#targets-to-destroy").text(horizontalCoordinates.length);
                            break;
                        }
                    }
                    if (hitDown == 0) {
                        fireDown(540);
                    }
                }
    // fire left
                else if (whereToFire == "left") {
                    var hitLeft = 0;
                    function fireLeft(target) {
                        $("#fire").css({ "transform": "rotate(180deg) translate(30px, 0px)" }).animate(
                            { left: target }, ((horizontal - target) * 3), "linear", function () { explosion() }
                        );
                    }
                    for (var i = 0; i < 5; i++) {
                        if ((parseInt(verticalCoordinates[i]) == vertical) && (parseInt(horizontalCoordinates[i]) < horizontal)) {
                            fireLeft(parseInt(horizontalCoordinates[i]));
                            horizontalCoordinates.splice(i, 1);
                            verticalCoordinates.splice(i, 1);
                            hitLeft++;
                            $("#targets-to-destroy").text(horizontalCoordinates.length);
                            break;
                        }
                    }
                    if (hitLeft == 0) {
                        fireLeft(0);
                    }
                }
        // fire right
                else if (whereToFire == "right") {
                    var hitRight = 0;
                    function fireRight(target) {
                        $("#fire").css({ "transform": "rotate(0deg) translate(-30px, 0px)" }).animate(
                            { left: target }, ((target - horizontal) * 3), "linear", function () { explosion() }
                        );
                    };
                    for (var i = 0; i < 5; i++) {
                        if ((parseInt(verticalCoordinates[i]) == vertical) && (parseInt(horizontalCoordinates[i]) > horizontal)) {
                            fireRight(parseInt(horizontalCoordinates[i]));
                            horizontalCoordinates.splice(i, 1);
                            verticalCoordinates.splice(i, 1);
                            hitRight++;
                            $("#targets-to-destroy").text(horizontalCoordinates.length);
                            break;
                        }
                    }
                    if (hitRight == 0) {
                        fireRight(690);
                    }
                };
                $("#ammo").text(ammo);
            }
            function explosion() {
                destroyed++;
                $("#fire").attr("src", "https://rostfriblog.files.wordpress.com/2016/02/baked-potato-explosion.gif?w=756");
                var exposionHorizontal = $("#fire").css("left");
                var exposionVertical = $("#fire").css("top");
                setTimeout(function () {
                    $('#fire').attr('src', "")
                    $(".speedway").append('<img class="hit" id="destroyed' + destroyed + '" src="img/fire.gif" alt="">')
                    $("#destroyed" + destroyed).css({
                        "left": exposionHorizontal,
                        "top": exposionVertical
                    })
                    readyToFire = true;
                }, 900)
            }
        }
        

    // penalty for flying outside battlefield
        if (horizontal < 0 || vertical < 0 || horizontal > 720 || vertical > 590) {
            $(".speedway").css({"background-image": "url(https://media.giphy.com/media/3o7aD4pR1HbHJFTBF6/giphy.gif)"});
            $("#plane").css({"display": "none"});
            $(".target").css({"display": "none"});
            $(".hit").css({"display": "none"});
        }
    })
})

