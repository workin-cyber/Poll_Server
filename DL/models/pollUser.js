const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    pollID: {
        type: mongoose.SchemaTypes.ObjectId
    },
    userID: {
        type: mongoose.SchemaTypes.ObjectId
    },
    pollStatus: {
        type: String,
        enum: ['start', 'in progress', 'done'],
        default: 'start'
    },
    answers: [
        {
            questionID: {
                type: mongoose.SchemaTypes.ObjectId
            },
            answerID:[mongoose.SchemaTypes.ObjectId]
        }]
})

module.exports = mongoose.model('pollUser', schema)