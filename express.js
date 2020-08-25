/*===================================
|| 
|| NodeJS Server with Express Framework
|| 
===================================*/
/*---------------------------
| Environment Vars
---------------------------*/
require('dotenv').config();

/*---------------------------
| Config
---------------------------*/
const NODE_PORT = process.env.NODE_PORT || 5000; // fallback to 5500

/*---------------------------
| Resources
---------------------------*/
const path = require('path');
// require('dotenv').config({ path: './.env.local' });
const express = require('express');
const bodyParser = require("body-parser"); //Only way to do POST requests

/*---------------------------
| Initiaize Instance of Express as app
---------------------------*/
const app = express();

/*---------------------------
| Set Up BodyParser for Post Requests
---------------------------*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*---------------------------
| Serve the static files from the React app
---------------------------*/
app.use(express.static(path.join(__dirname, 'build')));

/*---------------------------
| !IMNODE_PORTANT :: Should not be done in Production
| Bypassing CORS so Node Express can be on NODE_PORT 5000 and react can be on 3000
---------------------------*/
if (process.env.ENVIRONMENT === 'local') {
    app.use((request, response, next) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    });
}

/*---------------------------
| Route Collections
---------------------------*/
const routes = require('./express-routes/index.js');
app.use('/api/staff', routes.staff);
app.use('/api/services', routes.services);
app.use('/api/slides', routes.slides);
app.use('/api/email', routes.email);
app.use('/api/login', routes.login);

// Catchall for requests that do not match our routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Heroku process.env.PORT, we can use .env NODE_PORT to change local,or fallback to 5000  
const port = process.env.PORT || 5000; // fallback to 5000  
app.listen(port, () => { console.log('Server is up and listening onNODE_PORT:' + port );  });