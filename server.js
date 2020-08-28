const processEnv= require('dotenv').config();
const express     = require('express');
const bodyParser  = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const cfg = require('./config/config.js');
const crudHandler =require('./config/server/routes/routes');
const app = express();
//const creds = require('../../config/config.js');
console.log(processEnv);

///// EMAIL ////////////////////////
/*const transport = {
    host: 'smtp.ukr.net', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure:true,
    tls: {rejectUnauthorized: false},
    auth: {
        user: cfg.creds.USER,
        pass: cfg.creds.PASS
    }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email;
    var message = req.body.text
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: 'rkostik@ukr.net',//email,
        to: 'romichsh@outlook.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                status: 'fail'
            })
        } else {
            console.log('Message sent!');
            res.json({
                status: 'success'
            })
        }
    })
})

router.get('/send', function(req, res) {
    console.log(req.body);
});

*/

app.use(cors())
app.use(express.json())
app.use('/', router)
const server = app.listen(process.env.PORT||3002, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

})

/////////////////// MONGODB ////////////////////////////

/*const graphqlHTTP = require('express-graphql');*/
//const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());
////////// connect to Mongo
 mongoose.connect(cfg.cfg.dbConnect, (err) => {
    if (err) return console.log(err)});
    console.log('connected');

//console.log(typeof crudHandler);
crudHandler.crudHandler(app);

/*app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});*/

/*app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/
