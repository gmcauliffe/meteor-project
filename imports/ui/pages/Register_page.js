import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Register_page.html';

Template.Register.events({
  'change .register': function validate(event) {
    // do your validation here
  },

  'submit .register': function registerUser(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const usernameVar = event.target.registerUsername.value;
    const emailVar = event.target.registerEmail.value;
    const passwordVar = event.target.registerPassword.value;

    Accounts.createUser({
      username: usernameVar,
      email: emailVar,
      password: passwordVar,
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        FlowRouter.go('/');
      }
    });
    Meteor.users.find().fetch();
  },
});

// Validation Rules

// Trim Helper
function trimInput(val) {
  return val.replace(/^\s|\s*$/g, "");
}