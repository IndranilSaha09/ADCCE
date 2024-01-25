/* define module dependencies */
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
var usertest = true;
/* load user model */
const User = require('../models/User');

/* configuring passport.js with specified stratergy */
module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' },  async (username, password, done) => {
      /* match username */
      const founduser_a = await User.Provider_A.findOne({username: username});
      const founduser_b = await User.Provider_B.findOne({username: username});
      const founduser_c = await User.Provider_C.findOne({username: username});
      const founduser_d = await User.Provider_D.findOne({username: username});
      if (founduser_a) {
       /* match password in provider-a*/
      bcrypt.compare(password, founduser_a.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, founduser_a);
        } else {
          return done(null, false, { message: 'Password incorrect' });
        }
      });
      }

      else if (founduser_b) {
        /* match password in provider-b*/
       bcrypt.compare(password, founduser_b.password, (err, isMatch) => {
         if (err) throw err;
         if (isMatch) {
           return done(null, founduser_b);
         } else {
           return done(null, false, { message: 'Password incorrect' });
         }
       });
       }

       else if (founduser_c) {
        /* match password in provider-c*/
       bcrypt.compare(password, founduser_c.password, (err, isMatch) => {
         if (err) throw err;
         if (isMatch) {
           return done(null, founduser_c);
         } else {
           return done(null, false, { message: 'Password incorrect' });
         }
       });
       }

       else if (founduser_d) {
        /* match password in provider-d*/
       bcrypt.compare(password, founduser_d.password, (err, isMatch) => {
         if (err) throw err;
         if (isMatch) {
           return done(null, founduser_d);
         } else {
           return done(null, false, { message: 'Password incorrect' });
         }
       });
       }
       else{
         return done(null, false, { message: 'That username is not registered' });
       }

    })
  );

  /* specify way to store user in the session */
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  /* retrieves user from session, querying each provider and passing user object to the done callback */ 
  passport.deserializeUser( function(id, done) {
    User.Provider_A.findById(id)
    .exec((err, user) => {
      if (user) done(err, user);
  })

  User.Provider_B.findById(id)
  .exec((err, user) => {
    if (user) done(err, user);
})

User.Provider_C.findById(id)
  .exec((err, user) => {
    if (user) done(err, user);
})

User.Provider_D.findById(id)
  .exec((err, user) => {
    if (user) done(err, user);
})
    
  });
};