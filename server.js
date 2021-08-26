const processEnv = require('dotenv').config();
const express = require('express');
const schema = require('./api/graphql/schemas');
const ExpressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const cfg = require('./config/config.js');
const crudHandler = require('./config/server/routes/routes');
const app = express();




///// EMAIL ////////////////////////
/*const transport = {
    host: 'smtp.ukr.net', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure: true,
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
        console.log('Server is ready to take messages' + success);
    }
});

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email;
    const message = req.body.text
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mail = {
        from: cfg.creds.USER,
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

router.get('/send', function (req, res) {
    console.log(req.body);
});
*/
/////////////////////////////////////////

//app.use(cors())
//app.use(express.json())
///////////////////////////  GraphQL //////////////////////
app.use("/graphql", ExpressGraphQL({
    schema: schema,
    graphiql: true
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 3002, () => {

    const host = server.address().address
    const port = server.address().port
    console.log("app listening at https://%s:%s", host, port)

})

/////////////////// MONGODB ////////////////////////////

////////// connect to MongoDB
mongoose.connect(cfg.cfg.dbConnect, (err) => {
    if (err) return console.log(err)
});
console.log('connected');

// MongoDB logic
//crudHandler.crudHandler(app);
