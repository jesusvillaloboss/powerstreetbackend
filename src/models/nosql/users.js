const mongoose = require('mongoose')


const UserShema = new mongoose.Schema({
    user: {
        type: String
    },
    pass: {
        type: String
    },
    name: {
        type: String
    },
    last_login: {
        type: Date
    },
    type: {
        type: String,
        enum: ["desarrollo", "implementacion", "administracion", "usuario"]
    },
    max_idle_session_time: {
        type: Number,
        size: {
            lenght: 2
        }
    }

});

module.exports = mongoose .model('users', UserShema)