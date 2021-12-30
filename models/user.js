const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    idNumber: {
        type: String,
        unique: true,
    },
    phone: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String
        },
        street: {
            type: String
        },
        apartment: {
            type: String
        },
        zipCode: {
            type: String
        }
    },
    email: {
        type: String,
        unique: true
    },
    education: [
        {
            name: {
                type: String
            },
            years: {
                type: Number
            },
            eduType: {
                type: String
            }
        }],
    maritalStatus: {
        type: String,
        enum: ['Single', 'married', 'widowed', 'divorced']
    },
    birthDate: {
        type: Date,
    },
    sectoralAffiliation: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    permissions: {
        type: String,
        enum: ['admin', 'editor', 'viewer'],
        default: 'viewer'
    },
    password: {
        type: String,
        default: null
    }

})

module.exports = mongoose.model('user', schema)