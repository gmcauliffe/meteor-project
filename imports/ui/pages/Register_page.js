import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Register_page.html';

if (Meteor.isClient) {
  // Prevent default browser form submit
  Template.Register.events({
    'submit .register': function registerUser(event) {
      event.preventDefault();
    },
  });
  // Rules and custom messages for form validation
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
      registerTerms: {
        required: true,
      },
    },
    messages: {
      registerTerms: {
        required: 'Please agree with terms & conditions.',
      },
    }
  });

  Template.Register.onCreated(() => {
    console.log("The 'Register' template was just created.");
  });

  Template.Register.onRendered(() => {
    const validator = $('#registerForm').validate({
      errorClass: 'has-error help-block text-right animated fadeInDown',
      submitHandler: function submitHandler(event) {
        // Get value from form element
        const usernameVar = $('[name=registerUsername]').val();
        const emailVar = $('[name=registerEmail]').val();
        const passwordVar = $('[name=registerPassword]').val();

        // Register new User
        Accounts.createUser({
          username: usernameVar,
          email: emailVar,
          password: passwordVar,
        }, (error) => {
          if (error) {
            validator.showErrors({
              registerUsername: error.reason,
            });
          } else {
            FlowRouter.go('/');
          }
        });
      },
    });
  });

  Template.Register.onDestroyed(() => {
    console.log("The 'Register' template was just destroyed.");
  });
}