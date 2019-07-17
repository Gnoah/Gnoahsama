
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
        
        // //images
        let imageFile = req.files.photo_produit;
        //console.log('inona ny ato o!'+imageFile)
        let nomImage = idautom
        res.setHeader('Content-Type', 'text/plain');

        imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
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
        photo_produit:'' + nomImage +'.jpg'
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
        let picture = fs.readFileSync('./controller/public/'+req.params.photo_produit)
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
    Produit.findByIdAndRemove(req.params._Id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Person not found with id " + req.params._Id
            });
        }
        res.send({message: "Person deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Person not found with id " + req.params._Id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Person with id " + req.params._Id
        });
    });
};
