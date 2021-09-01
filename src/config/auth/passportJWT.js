const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWTsecret;
const { User } = require('../../models');


const logger = require('../../logger');

passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
    // called everytime a protected URL is being served
    // payload has the email  not the id

    User.findOne({ email: jwt_payload.data }, (err, user)=> {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

