// Categories = new Meteor.Collection('categories');
Categories.allow({  insert: function(userId, doc) {
    // autoriser les posts seulement si l'utilisateur est authentifié
return !! userId;  } });

