const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const verifycallback = (req, email, password, done) => {
  User.findOne({
    email: email,
  })
    .then(user => {
      if (!user) {
        return done(
          null,
          false,
          req.flash('message', 'Oops, email or password wrong!'),
        );
      }
      bcrypt.compare(password, user.password).then(isValid => {
        if (isValid) {
          return done(null, user);
        } else {
          return done(
            null,
            false,
            req.flash('message', 'Oops, email or password wrong!'),
          );
        }
      });
    })
    .catch(err => {
      done(err);
    });
};

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  verifycallback,
);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});
