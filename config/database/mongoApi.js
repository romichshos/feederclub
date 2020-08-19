var mongoose = require('mongoose');
var User = require('./models.js');


/* CREATE */

exports.createUser =  (username, psw, email) => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        login: {
            username: username,
            email: email//,
           // psw: psw
        }
    })

    user.save(function (err) {
        if (err) throw err;
        console.log(` ----------------------------------------- `);
        console.log(`User - ${username} -  successfully created.`);
        console.log(` ----------------------------------------- `);
    })

}

/* READ */

exports.getUser = ((email) => {
    User.findOne(`login.email: ${email}`, (err, user)=> { (err) ? console.log(err) : user});
})

exports.getUserByID = ((id) => {
    User.findOne({"_id": id}, (err, user)=> { (err) ? console.log(err) : user});
})

/* UPDATE */

exports.updateUserByID = (id, username, psw, email) => {
    User.update({"_id": id},
        {$set: {"login.$.username": username,"login.$.email": email}})
}


exports.updateUser = (id, username, psw, email) => {
    User.update({"login.$email": email},
        {$set: {"login.$.username": username,"login.$.email": email}})
}


/* user UserAdmin priority ----------------------------- */

/*var adminUser = new db.User({
    _id: new mongoose.Types.ObjectId(),
    login: {
        username: 'Romich',
        email: 'romichsh@outlook.com',
        psw: '080808'
    }, permission: {isAdmin: true, isPrimary: true, isCurrentUser: false}
})


var saveFn= adminUser.save(function (err) {
        if (err) throw err;
        console.log('adminUser successfully saved.');
    }
)*/

/* --------------------------------------------------- */


