const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({

    id: {
        type: String,
        unique: true,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const questionSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    questionType: {
        type: String,
        enum: ['singleChoise', 'multipleChoise', 'linear', 'openQuestion'],
        required: true
    },
    answersNum: {
        type: Number,
        required: true
    },
    order: {
        type: Number
    },
    isRequired: {
        type: Boolean
    },
    imageSource: {
        type: String
    },
    answers: [answerSchema]
})

const pollSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    creationDate: {
        type: Date
    },
    author: {
        type: String
    },
    designSettings: {
        background: {
            type: String
        },
        logo: {
            type: String
        }
    },
    shareLink: {
        type: String
    },
    questions: {
        type: [questionSchema]
    },
    isTemplate : {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('poll', pollSchema)