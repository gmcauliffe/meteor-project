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

    // // Get value from form element
    // const usernameVar = event.target.registerUsername.value;
    // const emailVar = event.target.registerEmail.value;
    // const passwordVar = event.target.registerPassword.value;

    // Accounts.createUser({
    //   username: usernameVar,
    //   email: emailVar,
    //   password: passwordVar,
    // }, (error) => {
    //   if (error) {
    //     console.log(error.reason);
    //   } else {
    //     FlowRouter.go('/');
    //   }
    // });
  },
});

if (Meteor.isClient) {
  Template.Register.onCreated(() => {
    console.log("The 'Register' template was just created.");
  });

  Template.Register.onRendered(() => {
    $('#registerForm').validate({
      rules: {
        registerUsername: {
          required: true,
          minlength: 6,
        },
        registerEmail: {
          required: true,
          email: true,
        },
        registerPassword: {
          required: true,
          minlength: 6,
        },
        registerPassword2: {
          required: true,
          equalTo: '#registerPassword',
        },
      },
    });
  });

  Template.Login.onDestroyed(() => {
    console.log("The 'login' template was just destroyed.");
  });
}