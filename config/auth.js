/* Exporting an object with two middleware functions for user authentication */

module.exports = {
    /* Middleware to ensure that user is authenticated before accessing a resource */
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next(); /* If authenticated, proceed to the next middleware or route */
      }
      req.flash('error_msg', 'Please log in to view that resource'); /* If not authenticated, flash an error message and redirect to the root URL */
      res.redirect('/');
    },
    
    /* Middleware to forward authenticated users away from certain routes */
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next(); /* If not authenticated, proceed to the next middleware or route */
      }
      res.redirect('/dashboard'); /* If authenticated, redirect to the '/dashboard' route */
    }
  };