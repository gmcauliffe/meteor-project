# Meteor Project

A mini user authentication application built with Meteor and Blaze, using OneUI HTML templates for the user and registration forms. 

See [live demo here!](https://glacial-mesa-74136.herokuapp.com/)

Implemented the following features:

* **User Authentication**: Username and password are compared against the database upon login.
* **Encryption**: Passwords are encrypted to ensure account security in the event of a database breach.
* **User Registration**: New users are able to signup. Email and username are checked for uniqueness to ensure non existing user, and alerts displayed if existing user.
* **Validation**: Form inputs are validated and appropriate error messages displayed to user.
* **Routing**: If logged in the user is redirected to their home page from all manually entered urls. If home page is accessed directly without logging in the user is redirected to the login page.
* **Remember Me**: At login the user can choose if they want the site to remember them and keep them logged in.
* **Not Found**: If the user tries to go directly to any unused paths they will be presented with a "Not Found" page.


### Getting Started

1. Fork and clone this repository.
2. Install dependencies using the `meteor npm install` command.
3. Start the web server using the `meteor` command. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.


## Dependencies

### Meteor Packages
* accounts-ui
* accounts-password
* kadira:flow-router
* kadira:blaze-layout
* twbs:bootstrap
* themeteorchef:jquery-validation
* jquery
* tprzytula:remember-me
* fortawesome:fontawesome

### NPM Modules
* Meteor
* Bcrypt
* @babel/runtime
* meteor-node-stubs


## Example Code

``` Javascript

RememberMe.loginWithPassword(username, password, (error) => {
          if (error) {
            validator.showErrors({
              loginUsername: error.reason,
            });
          } else {
            FlowRouter.go('/home');
          }
        }, rememberMe);


```
## Process

This was my first exploration into using Meteor or Blaze. I started out by going through the online [Meteor/Blaze tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app) and creating my own [ToDo app](https://github.com/gmcauliffe/simple-todos) with some extra features, including routing. I familiarised myself with the existing code-base (OneUI template) and determined how I could make use of the existing HTML and CSS using Meteor and Blaze. I applied previous research tactics to become familiar with new paradigms, frameworks and libraries. Overall it was a successful experience.

### Next Steps

* Have the login and registration error responses from the server display in the relevant form input depending on the response (currently all render in the top input) 
* Add in a "Forgot password function"
* Consider possibilities for expanding the functionality of the app beyond user login/registration.


## Final Product

!["Screenshot of landing page"](https://github.com/gmcauliffe/meteor-project/blob/master/docs/landing-page.png?raw=true)
!["Screenshot of login page"](https://github.com/gmcauliffe/meteor-project/blob/master/docs/login.png?raw=true)
!["Screenshot of registration page"](https://github.com/gmcauliffe/meteor-project/blob/master/docs/register.png?raw=true)
!["Screenshot of user home page"](https://github.com/gmcauliffe/meteor-project/blob/master/docs/user-home-page.png?raw=true)

