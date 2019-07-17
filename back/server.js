const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/dbconfig');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');
const app = express();

var cors = require('cors');
require('./models/model');

const users = require('./routes/user'); 

app.use(cors())
app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))
//upload
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', users);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});