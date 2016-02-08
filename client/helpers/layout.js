Template.layout.helpers({
    notHome: function() {
        return Router.current().route.getName() !== 'home';
    },
    isActive: function(template) {
        var currentRoute = Router.current();
        return currentRoute &&
            template === currentRoute.lookupTemplate() ? 'active' : '';
    }
});
