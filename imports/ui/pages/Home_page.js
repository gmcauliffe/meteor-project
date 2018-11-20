import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Home_page.html';

Template.Home.events({
  'click #logout': function logout(event) {
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go('/');
  },
});

Template.Home.helpers({
  email() {
    return Meteor.user().emails[0].address;
  },
});

if (Meteor.isClient) {
  Template.Home.onCreated(() => {
    console.log("The 'Home' template was just created.");
  });
  Template.Home.onRendered(() => {
    document.body.style.backgroundImage = "url('/img/photos/photo6@2x.jpg')";
  });
  Template.Home.onDestroyed(() => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'white';
  });
}
