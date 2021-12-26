var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

//uncomment for simple passport
// exports.local = passport.use(new LocalStrategy(
//     (username, password, done) => {
//         if(username === 'admin' && password === '1234') {
//            return done(null, {username: 'authenticated'});
//        } else {
//            return done(null, false);
//        }
//     }));            
// passport.serializeUser(function(user, done) {
//     done(null, User.username);
// });
// passport.deserializeUser((username, done) => {
//     done(null, {username: username});
// }); 
//end uncomment:::::::::::::::::::

//uncomment for passport and username password in mongodb
// exports.local = passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if ((user.password!=password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));

// passport.serializeUser(function(user, done) {
//      done(null, user.id);
// });  
// passport.deserializeUser(function(id, done) {
//      done(null, {username: username});
// });

//uncomment for passport using local-mongoose strategy
exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//end uncomment local mongoose strategy
//::::::::::::::::::::::::::::::::::::::