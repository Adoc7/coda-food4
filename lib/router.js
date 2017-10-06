Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('categories'); }
});

// Router.route('/', {
//     name: 'Categories' /// A LA PLACE DE postsList
// });


Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'categories'
    });

    this.route('admin', {
        path:'/admin',
        template: 'admin',

        template: 'accountsAdmin',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                alert('redirecting');
                this.redirect('/');
            }
        }

    });
});

Router.route('/categories/:_id', {
    name: 'categoriePage',
    // data:function() { return Meteor.subscribe('categories');}
    data:function() { return Categories.findOne(this.params._id);}
});

Router.route('/submit', {name: 'postSubmit'});




Router.route('/pages/:name', function() {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});

// Router.route('/panier/:_id', function() {
//     this.render(this.params._id,{
//         data: {
//             name: this.params._id
//         }});
// });

Router.route('/panier', {name: 'panier'});


Router.route('/validation', function(){
    this.render('validation');
});

// Router.route('/register', {
//     name: "user.register",
//     template: "register"
// });

var requireLogin = function() {
    if (! Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }}

// Router.route('/panier', {name: 'panier'});
Router.onBeforeAction('dataNotFound', {only: 'categoriePage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});


