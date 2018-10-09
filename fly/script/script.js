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
    console.log(horizontal);
        if (horizontal < 0 || vertical < 0 || horizontal > 680 || vertical > 380){
            $(".speedway").css({
                "background-image": "url(https://media.giphy.com/media/3o7aD4pR1HbHJFTBF6/giphy.gif)"
        });
        $("#plane").css({
            "display": "none"
    });
        }
    })
})