module.exports = (app) => {

    const pers = require('../controller/controller');
    app.post('/register', pers.createRegister);
    app.post('/login', pers.createLogin);
    app.get('/me', pers.find);
    // app.get('/profil/:profilId', pers.findOne);
    // app.get('/user/:photo_profil', pers.lireImage);
    // app.delete('/profil/:profilId', pers.delete);
    
}