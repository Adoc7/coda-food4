Template.layout.helpers({
    categories: function() {
        return Session.get('categories'); }
});

// Template.layout.helpers({
//     displayName(firstName, lastName, keyword) {
//         var prefix = keyword.hash.title ? keyword.hash.title + " " : "";
//         return prefix + firstName + " " + lastName;
//     }
// });