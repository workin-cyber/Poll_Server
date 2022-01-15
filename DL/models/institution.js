const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    tags: [String]
})

const institutionSchema = new mongoose.Schema({
    name: {
        type: String
    },
    contactDetails: {
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
        phone: {
            type: String
        },
        contactName: {
            type: String
        }
    },
    activities: [activitiesSchema]

})

module.exports = mongoose.model('institution', institutionSchema)