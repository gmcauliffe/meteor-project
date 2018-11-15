import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Login_page.html';

Template.Login.events({
  'submit form': function login(event) {
    event.preventDefault();
    // const username = event.target.loginUsername.value;
    // const password = event.target.loginPassword.value;
    // Meteor.loginWithPassword(username, password, (error) => {
    //   if (error) {
    //     console.log(error.reason);
    //   } else {
    //     FlowRouter.go('/');
    //   }
    // });
  },
});

if (Meteor.isClient) {
  Template.Login.onCreated(() => {
    console.log("The 'login' template was just created.");
  });

  Template.Login.onRendered(() => {
    $('#loginForm').validate({
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
  });

  Template.Login.onDestroyed(() => {
    console.log("The 'login' template was just destroyed.");
  });
}
