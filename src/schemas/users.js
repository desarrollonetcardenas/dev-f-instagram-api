const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { 'collection': 'usersInstagram', timestamps: true });


module.exports = mongoose.model('usersInstagram', UserSchema, 'usersInstagram');
