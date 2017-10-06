Meteor.publish('categories', function(){
    return Categories.find();
});

Meteor.publish('pizzas', function(){
    return Pizzas.find();
});

Meteor.publish('burgers', function(){
    return Burgers.find();
});

Meteor.publish('salades', function(){
    return Salades.find();
});

Meteor.publish('desserts', function(){
    return Desserts.find();
});

Meteor.publish('boissons', function(){
    return Boissons.find();
});

Meteor.publish('validation', function(){
    return Validation.find();
});

// Meteor.publish('register', function(){
//     return Register.find();
// });


//
// Meteor.publish( 'bankAccountInfo', function() {
//     if ( Roles.userIsInRole( this.userId, 'register', 'owners' ) ) {
//         return BankAccounts.find();
//     } else {
//         this.stop();
//         return
//     }
// });


Meteor.publish( 'keys', function() {
    if ( Roles.userIsInRole( this.userId, 'knives', 'chefs' ) ) {
        return Knives.find();
    } else {
        this.stop();
        return
    }
});

Meteor.publish( 'knives', function() {
    if ( Roles.userIsInRole( this.userId, 'customers' ) ) {
        return Foods.find();
    } else {
        this.stop();
        return
    }
});


