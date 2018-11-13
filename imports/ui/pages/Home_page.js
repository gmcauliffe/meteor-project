import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Home_page.html';

Template.Home.events({
  'click .logout': function logout(event) {
    event.preventDefault();
    Meteor.logout();
  },
});
