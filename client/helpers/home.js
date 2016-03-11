Template.home.rendered = function() {
    Session.set("base", "binary");
};

Template.home.events({
    "change .base-select": function(e,t) {

        var newBase = $(".base-select").val();
        Session.set("base", newBase);
    },
    "keyup .iban": function(e,t) {

        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
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
