import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Register_page.html';

if (Meteor.isClient) {
  Template.Register.events({
    'submit .register': function registerUser(event) {
      // Prevent default browser form submit
      event.preventDefault();
    },
  });

  $.validator.setDefaults({
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

  Template.Register.onCreated(() => {
    console.log("The 'Register' template was just created.");
  });

  Template.Register.onRendered(() => {
    $('#registerForm').validate({
      submitHandler: function submitHandler(event) {
        // Get value from form element
        const usernameVar = $('[name=registerUsername]').val();
        const emailVar = $('[name=registerEmail]').val();
        const passwordVar = $('[name=registerPassword]').val();

        Accounts.createUser({
          username: usernameVar,
          email: emailVar,
          password: passwordVar,
        }, (error) => {
          if (error) {
            console.log(error.reason);
          } else {
            FlowRouter.go('/');
          }
        });
        }
    });
  });

  Template.Register.onDestroyed(() => {
    console.log("The 'Register' template was just destroyed.");
  });
}