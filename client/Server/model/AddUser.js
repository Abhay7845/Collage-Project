const mongoose = require('mongoose');

const AddUser = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    occupation: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        unique: true,
        require: true
    },
    fullAddress: {
        country: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        postalCode: {
            type: Number,
            require: true
        },
        address: {
            type: String,
            require: true
        }
    },
    date: {
        type: Date,
        default: Date.now,
    },

})

const addUser = mongoose.model("addUser", AddUser);
addUser.createIndexes();
module.exports = addUser;