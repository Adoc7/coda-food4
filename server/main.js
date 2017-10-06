import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
    // bootstrap the admin user if they exist -- You'll be replacing the id later
    if (Meteor.users.findOne("your_admin_user_id"))
        Roles.addUsersToRoles("your_admin_user_id", ['admin']);
});



