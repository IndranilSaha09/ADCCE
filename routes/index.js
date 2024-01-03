var express = require('express');
var router = express.Router();

// Import authentication middleware from the config folder
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// GET request for the home page
router.get('/', forwardAuthenticated, function(req, res, next) {
    // Console log the session data
    console.log(req.session);
    // Render the 'login' view with the specified title
    res.render('login', { title: 'Login and Registration' });
});

// GET request for the dashboard page
router.get('/dashboard', ensureAuthenticated, function(req, res, next) {
    // Console log a message when accessing the dashboard along with the user info stored in the session
    console.log("in dashboard", req.session.passport.user);
    // Render the 'dashboard' view with the specified title
    res.render('dashboard', { title: 'Dashboard' });
});

// Export the router to make it accessible to other parts of the application
module.exports = router;
