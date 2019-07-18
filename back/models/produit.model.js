const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    
    _id: {type:Number, required:true},
    nom: { type: String, required: true},
    article: { type: String, required: true},
    prix: { type: Number, required: true },
    photo1 :String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('produit', UserSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
