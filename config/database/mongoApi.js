var mongoose = require('mongoose');
const User = require('./models');

/* CREATE */

exports.createUser =  (username, email) => {
    console.log('CREATE');
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        login: {
            username: username,
            email: email
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

exports.setUser = (username, email, createFunc) => {
    const getEmailCall = new Promise (function(resolve,reject){ User.findOne({"login.email": email}, (err, user) => {
        (err) ? reject(err) :  resolve(user);
    });})
    getEmailCall.then(function(user){
        if (user === null) { console.log('something'); createFunc(username, email);}
     }).catch(function(err) {console.log(err)})
}

exports.getUser = (email, isPresent) => {
     User.findOne({"login.email": email}, (err, user) => {
      (err) ? console.log(err) : (!user) ? isPresent(false) : isPresent(true);
     });
}


exports.getUserByID = (id) => {
    User.findOne({"_id": id}, (err, user)=> { (err) ? console.log(err) : user});
}

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


