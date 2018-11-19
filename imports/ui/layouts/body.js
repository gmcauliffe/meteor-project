import { Template } from 'meteor/templating';

import './body.html';
import '../pages/Login_page';
import '../pages/Register_page';

if (Meteor.isClient) {
  Template.body.onCreated(() => {
    console.log("The 'body' template was just created.");
  });
  Template.body.onRendered(() => {
    document.body.style.backgroundImage = 'none';
  });
  Template.body.onDestroyed(() => {
    console.log("The 'body' template was just destroyed.");
  });
}
