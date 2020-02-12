const express = require('express')
const router = express.Router()
const Park = require('../models/park.model')

// Aquí los endpoints


router.get('/new', (req, res) => res.render('parks/new-park'));

router.post("/new", (req, res, next) => {
    Park.create({
        name: req.body.name,
        description: req.body.description,
    })
        .then(() => res.redirect("new"))
        .catch(function () {
            next();
            throw new Error("Error");
        });
});
  

module.exports = router