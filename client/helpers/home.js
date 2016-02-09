Template.home.rendered = function() {
    Session.set("base", "hex");
    $(".selectpicker").selectpicker();
};
Template.home.helpers({

});
Template.home.events({
    'submit #quick-form': function(e, t) {

        e.preventDefault();
        console.log("You have submitted the form!");
    },
    'change #base-select': function(e, t) {

        var selectedBase = $("#base-select").val();
        Session.set("base", selectedBase);
    }
});
