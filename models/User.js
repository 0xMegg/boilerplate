const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlengh: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    tokenExp: {

    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}