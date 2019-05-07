const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;


//==========================MIDDLE WARE=================================//
//Protect Headers
app.use(helmet());


// Express Session Config
app.use(session({
    //keep it secret
    secret: process.env.SESSION_SECRET || 'This is a secret',
    //do not save when you login
    resave: false,
    saveUninitialized: false
}))

//BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cors
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOption));

//==========================HTML ENDPOINT=================================//
app.get('/', (req,res)=>res.send('<h1>Welcome to my Wayfarer API! hahahha!</h1>'));






//==========================Start Server=============================//
app.listen(PORT, () => console.log(`Port started on ${PORT}`));

