/* eslint-disable no-unused-vars */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import templates
import '../../ui/layouts/body';
import '../../ui/pages/Login_page';
import '../../ui/pages/Register_page';
import '../../ui/pages/Home_page';
import '../../ui/components/App_notFound.html';

// Import to override accounts templates
// import '../../ui/accounts/accounts-templates.js';

// Below here are the route definitions
FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('body', { main: 'Home' });
  },
});

FlowRouter.route('/login', {
  name: 'Login',
  action() {
    BlazeLayout.render('body', { main: 'Login' });
  },
});

FlowRouter.route('/register', {
  name: 'Register',
  action() {
    BlazeLayout.render('body', { main: 'Register' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('body', { main: 'App_notFound' });
  },
};
