import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Login_page.html';

Template.Login.events({
  'submit form': function login(event) {
    event.preventDefault();
    const usernameVar = event.target.loginUsername.value;
    const passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(usernameVar, passwordVar);
  },
});
