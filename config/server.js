const express     = require('express');
const bodyParser  = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
/*const graphqlHTTP = require('express-graphql');*/


/*const path = require('path');*/
const port =8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/routes')(app,{});

/*app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});*/

/*app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/


app.listen(8000,console.log(`We live in port ${port}`));