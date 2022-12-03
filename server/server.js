const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5001;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});

// const players = require('./public/scripts/client');

let players = [];

app.post('/players', function(req, res) {
    console.log('in the post request', req.body);

    players.push(req.body);
    // res.send(201);
} );

