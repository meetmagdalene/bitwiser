Template.registerHelper("isBase", function(base) {

    if (Session.get("base") == base) {
        console.log(Session.get("base"));
        return true;
    }
    else {
        return false;
    }
});
