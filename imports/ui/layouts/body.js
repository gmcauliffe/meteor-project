import { Template } from 'meteor/templating';

import './body.html';
import '../pages/Login_page';
import '../pages/Register_page';
import '../pages/Landing_page';

if (Meteor.isClient) {
  Template.body.onRendered(() => {
    document.body.style.backgroundImage = 'none';
  });
}
