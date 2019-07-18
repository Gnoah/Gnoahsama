const express = require('express');
const app = express.Router();
const pers = require('../controller/controller');
const produit = require('../controller/produit.controller');

    app.post('/register', pers.createRegister);
    app.post('/login', pers.createLogin);
    app.get('/user', pers.findUser)
    app.get('/me', pers.find);
    
//profil
    app.post('/produit', produit.create);
    app.get('/produit', produit.findAll);
    app.get('/user/:photo1', produit.lireImage);
    app.get('/produit/:profilId', produit.findOne);
    app.get('/user/:photo_profil', produit.lireImage);
    app.delete('/produit/:_id', produit.delete);
    
module.exports = app;