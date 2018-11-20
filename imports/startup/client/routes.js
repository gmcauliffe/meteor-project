/* eslint-disable no-unused-vars */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import templates
import '../../ui/layouts/body';
import '../../ui/layouts/layout1';
import '../../ui/pages/Landing_page';
import '../../ui/pages/Login_page';
import '../../ui/pages/Register_page';
import '../../ui/pages/Home_page';
import '../../ui/pages/Coming_page';
import '../../ui/components/App_notFound.html';

// Import to override accounts templates
// import '../../ui/accounts/accounts-templates.js';

// Below here are the route definitions
FlowRouter.route('/', {
  // Check if user is logged in
  triggersEnter: [(context, redirect) => {
    if (Meteor.userId()) {
      redirect('/home');
    }
  }],
  name: 'Landing',
  action() {
    BlazeLayout.render('body', { main: 'Landing' });
  },
});

FlowRouter.route('/login', {
  // Check if user is logged in
  triggersEnter: [(context, redirect) => {
    if (Meteor.userId()) {
      redirect('/home');
    }
  }],
  name: 'Login',
  action() {
    BlazeLayout.render('body', { main: 'Login' });
  },
});

FlowRouter.route('/register', {
  // Check if user is logged in
  triggersEnter: [(context, redirect) => {
    if (Meteor.userId()) {
      redirect('/home');
    }
  }],
  name: 'Register',
  action() {
    BlazeLayout.render('body', { main: 'Register' });
  },
});

FlowRouter.route('/home', {
  // Check if user is logged in
  triggersEnter: [(context, redirect) => {
    if (!Meteor.userId()) {
      redirect('/login');
    }
  }],
  name: 'Home',
  action() {
    BlazeLayout.render('layout1', { main: 'Home' });
  },
});

FlowRouter.route('/reminder', {
  name: 'Reminder',
  action() {
    BlazeLayout.render('layout1', { main: 'Coming' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('layout1', { main: 'App_notFound' });
  },
};
