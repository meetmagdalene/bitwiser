Template.BinaryToHex.rendered = function() {
    delete Session.keys['output'];
    $('input').inputfit();
}
Template.BinaryToHex.helpers({
    getOutput: function() {
        if (Session.get("output") !== undefined) {
            return Session.get("output");
        }
    }
});
Template.BinaryToHex.events({

    'submit #binary-to-hex-form': function(e, t) {

        e.preventDefault();

        var input = $("input.input").val();

        if (input !== "") {

            var result = ConvertBase.bin2hex(input.replace(/ /g, ''));

            if (result) {
                Session.set("output", pad(result.toUpperCase()));
            } else {
                console.log("The input was invalid.");
            }
        } else {
            Session.set("output", "0");
        }

    }
});

var pad = function(str) {
    var reverse = str.split("").reverse().join("");
    var str = reverse.replace(/(.{8})/g, "$1 ").trim();
    return str.split("").reverse().join("");
}
