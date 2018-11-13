import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Home_page.html';

Template.Home.events({
  'click .logout': function logout(event) {
    event.preventDefault();
    Meteor.logout();
  },
});

Template.Home.helpers({
  email() {
    return Meteor.user().emails[0].address;
  },
});
