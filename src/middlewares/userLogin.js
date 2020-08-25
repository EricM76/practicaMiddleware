module.exports = function(req, res, next) {
    let admin = req.query.admin

    switch (admin) {
        case 'Ada':
            next()
            break;
        case 'Greta':
            next()
            break;
        case 'Vin':
            next()
            break;
        case 'Tim':
            next()
            break;
        default:
            res.render('noentry')
            break;
    }
}