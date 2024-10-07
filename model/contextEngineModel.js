const mongoose = require("mongoose");

const ContextEngine = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    goal: {
        type: String,
        required: true,
    },
    autoSync: {
        type: Boolean
    },
    nextSync: {
        type: Date,
        default: Date.now,
        required: true,
    },
    createdBy: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'users'
        type: String
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'users'
    }
    ,
    updatedAt: {
        type: Date,
    }
});


const collectionName = 'contextEngine';
const YourModel = mongoose.model('contextEngine', ContextEngine, collectionName);
module.exports = YourModel