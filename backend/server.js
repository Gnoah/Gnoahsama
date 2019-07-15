const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/dbconfig');
const methodOverride = require('method-override');
var cors = require('cors');
const app = express();
require('./models/model');

const users = require('./routes/user'); 

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))

app.use(passport.initialize());
require('./passport')(passport);
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', users);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = 8080;

app.listen(8080, () => {
    console.log(`Server is running on PORT ${PORT}`);
});