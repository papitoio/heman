import { Posts } from '/imports/api/posts/posts.js';
import { Meteor } from 'meteor/meteor';
import './posts.html'

Template.posts.onCreated(function () {
    Meteor.subscribe('posts.all');
});

Template.posts.helpers({
    posts() {
        return Posts.find({}, { sort: { 'createdAt': -1 } });
    },
    totalLikes(likes) {
        return likes.length;
    }
});

Template.posts.events({
    'click .heart': function (event) {
        event.preventDefault();

        Meteor.call('posts.like', this._id, (err, res) => {
            if (err) {
                // alert(err.reason) // simples
                swal({ type: 'info', title: 'Oopss..', text: err.reason })
            } else {
                return true;
            }
        });
    }
})