# Meteor Project

A mini user authentication application built with Meteor and Blaze, using OneUI HTML templates for the user and registration forms. Learned how to navigate existing code-bases and implement new features with unfamiliar frameworks. Applied previous research tactics to become familiar with new paradigms, frameworks and libraries.


Implemented the following features:

* **User Authentication**: Username and password are compared against the database upon login.
* **Encryption**: Passwords are encrypted to ensure account security in the event of a database breach.
* **User Registration**: New users are able to signup. Email and username are checked for uniqueness to ensure non existing user, and alerts displayed if existing user.
* **Validation**: Form inputs are validated and appropriate error messages displayed to user.
* **Routing**: If logged in the user is redirected to their home page from all manually entered urls. If home page is accessed directly without logging in the user is redirected to the login page.

Code is DRY and modular, following the recommended Meteor application structure.

### Getting Started

1. Clone this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.


### Final Product

!["Screenshot of Meteor App"](https://github.com/gmcauliffe/meteor-project/blob/master/docs/)

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

## Setup

1. Fork & Clone
2. Run `bundle install` to install dependencies
3. Create `config/database.yml` by copying `config/database.example.yml`
4. Create `config/secrets.yml` by copying `config/secrets.example.yml`
5. Run `bin/rake db:reset` to create, load and seed db
6. Create .env file based on .env.example
7. Sign up for a Stripe account
8. Put Stripe (test) keys into appropriate .env vars
9. Run `bin/rails s -b 0.0.0.0` to start the server

## Stripe Testing

Use Credit Card # 4111 1111 1111 1111 for testing success scenarios.

More information in their docs: <https://stripe.com/docs/testing#cards>

## Dependencies

* Rails 4.2 [Rails Guide](http://guides.rubyonrails.org/v4.2/)
* PostgreSQL 9.x
* Stripe
