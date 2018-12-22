const express = require('express');
const router = express.Router();

const passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    FACEBOOK_APP_ID = '1150980085075169',
    FACEBOOK_APP_SECRET = '38149ac38b98967700b5d36bf6b8a92e';

passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/login/auth/facebook/callback",
        profileFields: ['id', 'name', 'emails', 'photos'] //This
    },
    function (accessToken, refreshToken, profile, done) {
        console.log(profile._json);
        // profile._json.id
        // profile._json.last_name
        // profile._json.first_name
        // profile._json.email
        // profile._json.picture.data.url
        done(null);
    }
));

/* GET login page. */
router.get('/', function (req, res) {
    res.render('login');
});

router.get('/auth/facebook', passport.authenticate('facebook'));

// bị lỗi unauthorized bởi vì nó yêu cầu https
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/booking',
    })
);



module.exports = router;