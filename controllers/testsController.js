var Image = require('../models/Image');
var User = require('../models/User');

module.exports = {
    showTest: function(req,res,next){
        User.findById(req.user, function(err, user){
            if(err) return next(err);
            res.render('recTests/test1', {user});
    })
    }
}