$(document).ready(function () {
    var zgoda = $("#zgoda");
    var button = $("#button");

    $("#zgoda").click(function () {
        if (button.prop("disabled") == true) {
            button.prop("disabled", false)
        } else if (button.prop("disabled") == false) {
            button.prop("disabled", true)
        }
    });
});