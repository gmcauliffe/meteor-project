import { FlowRouter } from 'meteor/kadira:flow-router';

// Import templates
import '../../ui/layouts/body';
import '../../ui/pages/Login_page';
import '../../ui/pages/Register_page';
import '../../ui/pages/Home_page';

// Import to override accounts templates
// import '../../ui/accounts/accounts-templates.js';

// Below here are the route definitions
FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('body', { main: 'Login' });
  }
});

FlowRouter.route('/login', {
  action: function(params, queryParams) {
    BlazeLayout.render('body', { main: 'Login' });
  }
});

FlowRouter.route('/register', {
  action: function(params, queryParams) {
    BlazeLayout.render('body', { main: 'Register' });
  }
});

FlowRouter.route('/home', {
  action: function(params, queryParams) {
    BlazeLayout.render('body', { main: 'Home' });
  }
});