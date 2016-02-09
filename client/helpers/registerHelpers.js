Template.registerHelper("isBase", function(base) {

    if (Session.get("base") == base) {
        return true;
    }
    else {
        return false;
    }
});
