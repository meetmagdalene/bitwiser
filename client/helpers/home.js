Template.home.rendered = function() {
  Session.set("base", "hex");
  $(".selectpicker").selectpicker();
};
Template.home.helpers({
  isBinary: function() {
    if (Session.get("base") == "binary") {
      return "selected";
    }
    // ELSE omitted intentionally
  },
  isDecimal: function() {
    if (Session.get("base") == "decimal") {
      return "selected";
    }
    // ELSE omitted intentionally
  },
  isHex: function() {
    if (Session.get("base") == "hex") {
      return "selected";
    }
    // ELSE omitted intentionally
  },
});
Template.home.events({
  'submit .all-purpose': function(e, t) {

    e.preventDefault();
    console.log("You have submitted the form!");
  },
  'change #base-select': function(e, t) {

    var selectedBase = $("#base-select").val();
    Session.set("base", selectedBase);
  }
});
