const {getUser, createUser, updateUser} = require('../../database/mongoApi.js');


const crudHandler = function(app) {

 // READ USER
    app.get('/users', (req, res) => {
    getUser(req.body.email).then(res.send(data));
    });

    app.get('/users/:id', (req, res) => {
        getUser(req.body.id).then(res.send(data));
    });


// CREATE USER
    app.post("/users", (req, res) => {
      createUser(req.body.username, req.body.email, req.body.psw).then(res.send(data))
        });


    app.put('/users', (req, res) => {
        updateUser(req.body.username, req.body.email)
    });
    //app.delete('/users', (req, res) => {});
}


exports.crudHandler = crudHandler;