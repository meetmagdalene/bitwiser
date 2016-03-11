Template.home.rendered = function() {
    Session.set("base", "binary");
    $(".loading").hide();
};

Template.home.events({
    "change .base-select": function(e,t) {

        var newBase = $(".base-select").val();
        Session.set("base", newBase);
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

        setTimeout(function() {
            $(".loading").hide();
        }, 3000);
    }
});

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
})
