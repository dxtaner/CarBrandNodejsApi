const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cars'
    }]
});

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, name: this.name, email: this.email}, 'secret');
    return token;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;