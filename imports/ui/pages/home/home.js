import './home.html';


Template.App_home.helpers({
    userName() {
        var user = Meteor.user();
        if (user) {
            return user.profile.name;
        }
    }
})