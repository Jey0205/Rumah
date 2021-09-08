var express = require('express');
var router = express.Router();
var models = require('../models/index')
const multer = require('multer')
const path = require('path')
const imageUpload = multer({
  storage: multer.diskStorage(
      {
        destination: function (req, file, cb) {  
          let uploadPath = path.join(__dirname, "..", "public", "images", "rumah");
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


router.get('/',(req, res, next) => {
    models.Rumah.findAll().then(function(rumah){
        res.status(201).json(rumah)
    }).catch(err =>{
        res.status(500).json({err})
    });
    });

router.post('/add',imageUpload.array('photos',10),(req,res,next) =>{
    models.Rumah.create({
        title: req.body.title,
        alamat: req.body.alamat,
        luasbangunan: req.body.luasbangunan,
        luastanah: req.body.luastanah,
        interior: req.body.interior,
        lantai: req.body.lantai,
        listrik: req.body.listrik,
        tempatparkir: req.body.tempatparkir,
        sertifikat: req.body.sertifikat,
        harga: req.body.harga,
        map: req.body.map,
        foto: req.files,
        // userid:
    }).then(rumah =>{
        if(req.files.length == 0){
            res.status(500).json({message: 'Masukan Foto!'})
        }else{
            res.status(201).json({
                message: 'Commercial Posted',
                rumah
            })
        }
            }).catch(err =>{
        res.status(500).json({err, message: 'Something Happen!'})
    });
});

router.put('/edit/:id',imageUpload.array('photos',10),(req,res,next) =>{
    models.Rumah.update({
        title: req.body.title,
        alamat: req.body.alamat,
        luasbangunan: req.body.luasbangunan,
        luastanah: req.body.luastanah,
        interior: req.body.interior,
        lantai: req.body.lantai,
        listrik: req.body.listrik,
        tempatparkir: req.body.tempatparkir,
        sertifikat: req.body.sertifikat,
        harga: req.body.harga,
        map: req.body.map,
        foto: req.body.foto,
        // userid:
    },{
        where:{
            id: req.params.id
        },
        returning: true,
        plain: true
    }).then(rumah =>{
        res.status(201).json(rumah)
    }).catch(err =>{
        res.status(500).json({err})
    });
});

router.delete('/delete/:id', (req,res,next) =>{
    models.Rumah.destroy({
        where:{
            id: req.params.id
        }
    }).then(function (rumah) {
      res.status(201).json(rumah);
    }).catch(err => {
      res.status(500).json({ err })
    })
  });

router.post('/comment',(req,res,next) =>{
    models.Komentar.create({
        komen: req.body.komentar
        // userid:
    }).then(function(komentar){
        res.status(201).json(komentar)
    }).catch(err =>{
        res.status(500).json({ err })
    });
});  

router.delete('/delete/comment/:id',(req,res,next) =>{
    models.Komentar.destroy({
        where:{
            id: req.params.id
        }
    }).then(function (komentar){
        res.status(201).json(komentar)
    }).catch( err =>{
        res.status(500).json({ err })
    })
})
  

module.exports = router;
