var mongoose = require('mongoose');

/* User */

const userSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        login: {
            username: {type: String, required: [true, "can't be blank"], index: true},
            email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
            hash: {type: String, default: ''},
            salt: {type: String, default: ''}
        },
        created: {type: Date, default: Date.now},
        logged:{type: Date, default: Date.now}
    }
);

const User = module.exports = mongoose.model('User', userSchema);
//-----------------------------------------------------

