import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Register_page.html';

Template.Register.events({
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
        console.log('Success!');
      }
    });
    Meteor.users.find().fetch();
  },
});
