
const Produit = require('../models/produit.model');
const fs = require('fs');

//Create new produit
exports.create = (req, res) => {
    
    Produit.find()
    .then(user => {
        //autoincrement
        let idautom;
        if(user.length == 0){
            idautom = 0
        }else {
            idautom = parseInt(user[user.length - 1]._id) + 1
        }
        console.log(req.body);
        
        // //images
        let imageFile = req.files.photo1;
        let nomImage = idautom
        console.log(req.files);
        
        imageFile.mv(`${__dirname}/public/${nomImage}.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          
        });

        let imageFile2 = req.files.photo2;
        let nomImage2 = nomImage+1;
        console.log(req.files);
        imageFile2.mv(`${__dirname}/public/${nomImage2}.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          
        });

        let imageFile3 = req.files.photo3;
        nomImage3 = nomImage+2;
        console.log(req.files);
        
        imageFile3.mv(`${__dirname}/public/${nomImage3}.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          
        });
    
        //console.log('image file '+req.body.filename)
    const produit = new Produit({   
             
        _id: idautom,
        nom: req.body.nom , 
        article: req.body.article,
        prix: req.body.prix,
        photo1:'' + nomImage +'.jpg',
        photo2:'' + nomImage2 +'.jpg',
        photo3:'' + nomImage3 +'.jpg'
    });

    // Save p in the database
    produit.save()
    .then(() => {
        Produit.find()
        .then(data=>{
            res.send(data);
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the profil."
            
        });
    });
})
};

exports.findAll = (req, res) => {   
    Produit.find()
    .then(users => {    
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving profils."
        });
    });
};

exports.lireImage =(req, res) =>{
    try {
        let picture = fs.readFileSync('./controller/public/'+req.params.photo)
        res.write(picture)
        res.end()
    } catch (e) {
        console.log("erreur be miitsy", e.stack);
    }
}

// Find a single profil with a profilId
exports.findOne = (req, res) => {
    Produit.findById(req.params.produitId)
    .then(produitchoix => {
        //console.log(unprofil) 
        if(!produitchoix) {
            return res.status(404).send({
                message: "profil not found with id" + req.params.produitId
            });            
        }
        else{  
            res.send(produitchoix);             
        }
        
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "profil not found with id " + req.params.produitId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving profil with id " + req.params.produitId
        });
    });
};

// Update a Person identified by the PersonId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nom) {
        return res.status(400).send({
            message: "Person content can not be empty"
        });
    }

    // Find Person and update it with the request body
    Produit.findByIdAndUpdate(req.params._Id, {
        nom: req.body.nom || "Unamed Personne", 
        article: req.body.article,
        prix: req.body.prix,
        photo_produit:'' + nomImage +'.jpg'
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Person not found with id " + req.params._Id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Person not found with id " + req.params._Id
            });                
        }
        return res.status(500).send({
            message: "Error updating person with id " + req.params._Id
        });
    });
};

// Delete a Person with the specified PersonId in the request
exports.delete = (req, res) => {
    Produit.findById(req.params._id)
      .then(produit =>
        produit.remove().then(() =>
          res.json({
            success: true
          })
        )
      )
      .catch(err =>
        res.status(404).json({
          succes: false
        })
      );
  }
