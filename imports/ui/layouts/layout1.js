import { Template } from 'meteor/templating';

import './layout1.html';
import '../pages/Coming_page';
import '../pages/Home_page';
import '../components/App_forcedLoggedIn.html';

if (Meteor.isClient) {
  Template.layout1.onRendered(() => {
    document.body.style.backgroundImage = "url('/img/photos/photo6@2x.jpg')";
  });
  Template.layout1.onDestroyed(() => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'white';
  });
}
