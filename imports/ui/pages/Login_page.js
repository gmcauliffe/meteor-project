import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Login_page.html';

if (Meteor.isClient) {
  Template.Login.events({
    'submit form': function submitForm(event) {
      // Prevent default browser form submit
      event.preventDefault();
    },
  });

  $.validator.setDefaults({
    rules: {
      loginUsername: {
        required: true,
        minlength: 6,
      },
      loginPassword: {
        required: true,
        minlength: 6,
      },
    },
  });

  Template.Login.onCreated(() => {
    console.log("The 'login' template was just created.");
  });

  Template.Login.onRendered(() => {
    const validator = $('#loginForm').validate({
      errorClass: 'has-error help-block text-right animated fadeInDown',
      submitHandler: function submitHandler(event) {
        const username = $('[name=loginUsername]').val();
        const password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(username, password, (error) => {
          if (error) {
            validator.showErrors({
              loginUsername: error.reason,
            });
          } else {
            FlowRouter.go('/');
          }
        });
      },
    });
  });

  Template.Login.onDestroyed(() => {
    console.log("The 'login' template was just destroyed.");
  });
}
