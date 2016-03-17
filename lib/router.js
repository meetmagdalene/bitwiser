Router.configure({
  layoutTemplate: 'layout'
});

// Level 0
Router.route('/', {
    name: 'home',
    title: "Home"
});

Router.route('/about', {
    name: 'about',
    title: 'about'
});
