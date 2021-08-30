var express = require('express');
var router = express.Router();
var models = require('../models/index')
const bcrypt = require('bcrypt');
const saltRounds = 5;
const multer = require('multer')
const path = require('path')
const imageUpload = multer({
  storage: multer.diskStorage(
      {
        destination: function (req, file, cb) {  
          let uploadPath = path.join(__dirname, "..", "public", "images", "profile");
            cb(null, uploadPath);
        },
          filename: function (req, file, cb) {
              cb(
                  null,
                  new Date().valueOf() + 
                  '_' +
                  file.originalname
              );
          }
          
      }
  ), 
});




router.get('/', (req, res, next) => {
  models.User.findAll({where:{
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }}).then(function (user) {
    res.status(201).json(user);
  }).catch(err => {
    res.status(500).json({ err })
  })
 
})

router.post('/add', imageUpload.single('photos'), (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    models.User.create({
      email: req.body.email,
      password: hash,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      admin: req.body.admin,
      number: req.body.number,
      photos: req.file
    }).then(function (user) {
      res.status(201).json(user);
    }).catch(err => {
      res.status(500).json({ err })
    })
  });
});

router.put('/changeprofile/:id', imageUpload.single('photos'), (req, res, next) => {
  models.User.update({
    photos: req.file
  }, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true,
    new: true
  }).then(function(user){
    console.log(user)
    res.status(201).json(user)
  }).catch(err =>{
    res.status(500).json({err})
  })



})


router.put('/edit/:id', function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    models.User.update({
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: hash,
      number: req.body.number
    }
      , {
        where: {
          id: req.params.id
        },
        returning: true,
        plain: true

      }).then(function (user) {
        res.status(201).json(user);
      }).catch(err => {
        res.status(500).json({ err })
      })
  })

});

router.delete('/delete/:id', (req, res, next) => {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    res.status(201).json(user);
  }).catch(err => {
    res.status(500).json({ err })
  })
});



module.exports = router;
