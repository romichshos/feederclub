const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const cfg = require('../../config/config.js');
const crudHandler =require('./routes/routes');



/*const graphqlHTTP = require('express-graphql');*/


/*const path = require('path');*/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());
// connect to Mongo
mongoose.connect(cfg.cfg.dbConnect, (err) => {
    if (err) return console.log(err)});
console.log('connected');

app.listen(cfg.cfg.serverPort, () => {
    console.log(`We are live on  ${cfg.cfg.serverPort}`);
});




/*crudHandler.createUser('Romich', '080808', 'romich@gmail.com');*/

/*app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});*/

/*app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/
