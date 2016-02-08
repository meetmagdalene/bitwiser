Router.configure({
  layoutTemplate: 'layout'
});

// Level 0
Router.route('/', {
    name: 'home',
    title: "Home"
});

// Level 1
Router.route('/hex-to-binary', {
    name: 'hex-to-binary',
    template: "HexToBinary",
    title: "Hex to Binary",
    parent: 'home',
    showLink: false
});

Router.route('/binary-to-hex', {
    name: 'binary-to-hex',
    template: "BinaryToHex",
    title: "Binary to Hex",
    parent: 'home',
    showLink: false
});

Router.route('/hex-operations', {
    name: 'hex-operations',
    template: "HexOperations",
    title: "Hex Operations",
    parent: 'home',
    showLink: false
});

Router.route('/banary-operations', {
    name: 'binary-operations',
    template: "BinaryOperations",
    title: "Binary Operations",
    parent: 'home',
    showLink: false
});
