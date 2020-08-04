const express     = require('express');
const bodyParser  = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const cfg = require('./config/config.js');
const crudHandler =require('./config/server/routes/routes');
//const creds = require('../../config/config.js');


///// EMAIL ////////////////////////
const transport = {
    host: 'mx1.mirohost.net', // Don’t forget to replace with the SMTP host of your provider
    port: 143,
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
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: name,
        to: 'feederclub@feedershostka.com.ua',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)

///////////////////////////////////////////////

/*const graphqlHTTP = require('express-graphql');*/


/*const path = require('path');*/
//const app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use( bodyParser.json());
// connect to Mongo
//mongoose.connect(cfg.cfg.dbConnect, (err) => {
//    if (err) return console.log(err)});
//console.log('connected');

//app.listen(cfg.cfg.serverPort, () => {
 //   console.log(`We are live on  ${cfg.cfg.serverPort}`);
//});




/*crudHandler.createUser('Romich', '080808', 'romich@gmail.com');*/

/*app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});*/

/*app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/
