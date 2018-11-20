import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Landing_page.html';

if (Meteor.isClient) {
  Template.Landing.onRendered(() => {
    document.body.style.backgroundImage = "url('/img/photos/photo3@2x.jpg')";
  });
  Template.Landing.onDestroyed(() => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'white';
  });
}
