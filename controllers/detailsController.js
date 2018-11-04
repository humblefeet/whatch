var User = require('../models/User');

module.exports = {
    showDetail: function(req, res, next){
        console.log('it made it here')
        User.findById(req.user, function(err, user){
            if(err) return next(err);
            console.log('this would render')
            res.render('movieDetail/details', {user})
        })
    }
}