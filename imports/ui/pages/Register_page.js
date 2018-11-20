import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { jQuery } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

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
      registerUsername: {
        required: 'Please enter a username',
        minlength: 'Your username must consist of at least 3 characters',
      },
      registerEmail: 'Please enter a valid email address',
      registerPassword: {
        required: 'Please provide a password',
        minlength: 'Your password must be at least 5 characters long',
      },
      registerPassword2: {
        required: 'Please provide a password',
        minlength: 'Your password must be at least 5 characters long',
        equalTo: 'Please enter the same password as above',
      },
      registerTerms: 'You must agree to the service terms!',
    },
  });

  Template.Register.onCreated(() => {
    console.log("The 'Register' template was just created.");
  });

  Template.Register.onRendered(() => {
    const validator = $('#registerForm').validate({
      // Add classes to validation display
      errorClass: 'help-block text-right animated fadeInDown',
      errorElement: 'div',
      errorPlacement: function errorPlacement(error, e) {
        jQuery(e).parents('.form-group > div').append(error);
      },
      highlight: function highlight(e) {
        jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
        jQuery(e).closest('.help-block').remove();
      },
      success: function success(e) {
        jQuery(e).closest('.form-group').removeClass('has-error');
        jQuery(e).closest('.help-block').remove();
      },
      // Handle form submit
      submitHandler: function submitHandler(e) {
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
            FlowRouter.go('/home');
          }
        });
      },
    });
  });

  Template.Register.onDestroyed(() => {
    console.log("The 'Register' template was just destroyed.");
  });
}