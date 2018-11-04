var User = require('../models/User');

module.exports = {
    showDetail: function(req, res, next){
        User.findById(req.user, function(err, user){
            if(err) return next(err);
            res.render('movieDetail/details')
        })
    }
}