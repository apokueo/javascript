const express = require('express'); // common js modules
const app = express();

// route handler
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});


// when HEROKU deploys this app, it has the ability to invoke envars (see if they declared PORT)
const PORT = process.env.PORT || 5000;

// Tell Heroku what version of node you want it to use

app.listen(5000);


