Template.registerHelper("isSelectedBase", function(base) {
    if (Session.get("base") == base) {
        return "selected";
    }
    // ELSE omitted intentionally
});
Template.registerHelper("getBase", function() {
    return Session.get("base");
});
Template.registerHelper("isIban", function(base) {
    if (Session.get("base") == base) {
        return "iban";
    }
})
