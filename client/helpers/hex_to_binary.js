Template.HexToBinary.rendered = function() {
    delete Session.keys['output'];
    $('input').inputfit();
}
Template.HexToBinary.helpers({
    getOutput: function() {
        if (Session.get("output") !== undefined) {
            return Session.get("output");
        }
    }
});
Template.HexToBinary.events({
    'submit #hex-to-binary-form': function(e, t) {

        e.preventDefault();

        var input = $("input.input").val();

        if (input !== "") {

            var oResult = hexToBinary(input);

            if (oResult.valid) {
                Session.set("output", oResult.result);
            }
            else {
                console.log("The input was invalid.");
            }
        }
        else {
            Session.set("output", "0");
        }

    }
});
