// Categories = new Meteor.Collection('categories');
Categories.allow({  insert: function(userId, doc) {
    // autoriser les posts seulement si l'utilisateur est authentifié
return !! userId;  } });

// Categories = new Mongo.Collection('categories');

// Meteor.methods({
//     categorieInsert: function(postAttributes) {
//         check(Meteor.userId(), String);
//         check(postAttributes, {
//             title: String,
//             url: String
//         });
//         var user = Meteor.user();
//         var post = _.extend(postAttributes, {
//             userId: user._id,
//             author: user.username,
//             submitted: new Date()        });
//         var postId = Categories.insert(categorie);
//         return {
//             _id: categorieId
//         };
//     }});