/*
export const url={url:'/localhost'}*/

import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/mongoose_auth', function (err) {

    if (err) throw err;

    console.log('Successfully connected');

});

const userSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        login: {
            username: String,
            email: String,
            psw: String
        },
        permission: {
            isAdmin: Boolean,
            isPrimary: Boolean,
            isCurrentUser: Boolean
        },
        created: {
            type: Date,
            default: Date.now
        }
    }
);

const adminUser = mongoose.model('User', userSchema);

/* user UserAdmin priority ----------------------------- */

var user = new User({
    _id: new mongoose.Types.ObjectId(),
    login: {
        username: 'Romich',
        email: 'romichsh@outlook.com',
        psw: '080808'
    }, permission: {isAdmin: true, isPrimary: true, isCurrentUser: false}
})


adminUser.save(function (err) {
        if (err) throw err;
        console.log('Author successfully saved.');
    }
)

/* --------------------------------------------------- */