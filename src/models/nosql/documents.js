const mongoose = require('mongoose')


const DocumentShema = new mongoose.Schema({
    title: {
        type: String
    },
    document: {
        type: String
    },
    author: {
        user: {
            type: String
        },
        name: {
            type: String
        }
    },
    modified_by: {
       user: {
            type: String
        },
        name: {
            type: String
        }
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String,
    },
    history_change: {
        document: {
            type: String
        },
        date: {
            type: String
        },
        server_date: {
            type: Date
        },
        author_change: {
            user: {
                type: String
            },
            name: {
                type: String
            }
        }

    }

});

module.exports = mongoose .model('documents', DocumentShema)