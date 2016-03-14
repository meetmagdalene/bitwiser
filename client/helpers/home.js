Template.home.rendered = function() {
    Session.set("base", "binary");
    $(".loading").hide();
};

Template.home.helpers({
    basePlaceholder: function() {

        var base = Session.get("base");

        switch (base) {
            case "hex":
                return "0x00000000";
                break;
            case "binary":
                return "0000 0000 0000 0000";
                break;
            case "decimal":
            default:
                return "0";
                break;
        }
    }
});

Template.home.events({
    "change .base-select": function(e,t) {

        var newBase = $(".base-select").val();
        Session.set("base", newBase);
        $("input").val("");
    },
    "input .iban": function(e,t) {
        // Only allow digits 1 and 0 and add a space after every four characters
        e.target.value = e.target.value.replace(/[^\(0-1)]/g, '').replace(/(.{4})/g, '$1 ').trim();
    },
    "input .hexi": function(e,t) {
        // Only allow characters A-F
        e.target.value = e.target.value.replace(/[^\d(A-F)(a-f)]/g, '').trim();
    },
    "input .deci": function(e,t) {
        // Only allow digits
        e.target.value = e.target.value.replace(/[^\(0-9)]/g, '');
    },
    "click #process": function(e,t) {

        e.preventDefault();
        $(".loading").show();

        var base = Session.get("base");
        var currValue = $("input").val();
        console.log("Value: " + currValue + " in " + base);

        var result = {};

        if (base == "binary") {
            currValue = Helpers.cleanBinary(currValue);
        }
        // ELSE omitted intentionally

        switch (base) {
            case "hex":

                result.binary = parseInt(currValue, 16).toString(2);
                result.octal = parseInt(currValue, 16).toString(8).toUpperCase();
                result.decimal = parseInt(currValue, 16).toString(10);
                result.hex = currValue.toUpperCase();
                break;

            case "binary":

                result.binary = currValue;
                result.octal = parseInt(currValue, 2).toString(8).toUpperCase();
                result.decimal = parseInt(currValue, 2).toString(10);
                result.hex = parseInt(currValue, 2).toString(16).toUpperCase();
                break;

            case "decimal":
            default:

                result.binary = parseInt(currValue, 10).toString(2);
                result.octal = parseInt(currValue, 10).toString(8).toUpperCase();
                result.decimal = currValue;
                result.hex = parseInt(currValue, 10).toString(16).toUpperCase();
                break;
        }

        console.log("Binary: " + Helpers.prettyBinary(result.binary));
        console.log("Octal: " + result.octal);
        console.log("Decimal: " + result.decimal);
        console.log("Hex: " + result.hex);

        $(".loading").hide();
    }
});
