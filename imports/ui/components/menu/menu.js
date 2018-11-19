import './menu.html'

Template.menu.helpers({
    userName() {
        var user = Meteor.user();
        if (user) {
            return user.profile.name;
        }
    }
})