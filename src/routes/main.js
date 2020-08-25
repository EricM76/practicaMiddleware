const express = require('express');
const router = express.Router();

const userLogin = require('../middlewares/userLogin')

router.get('/', function(req, res) {
    res.render('index')
})
router.get('/services', function(req, res) {
    res.render('services')
})
router.get('/services/design', function(req, res) {
    res.render('design')
})
router.get('/login', function(req, res) {
    res.render('login')
})
router.get('/admin', userLogin, function(req, res) {
    let admin = req.query.admin
    res.render('admin', {
        admin: admin
    })
})
router.get('/noentry', function(req, res) {
    res.render('noentry')
})

module.exports = router