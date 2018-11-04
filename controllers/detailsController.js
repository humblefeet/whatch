module.exports = {
    showDetail: function(req, res, next){
        res.render('movieDetail/details', {user: req.userModel});
    }
}