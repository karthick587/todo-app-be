const express = require('express');
const cors = require('cors');
const  ConnectDB  = require('./config/connectDB');
const contextEngineRoute=require('./route/contextEngineRoute')
const port = 3001;
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
const corsOptions = {
    // Allow only requests from this domain
    origin: '*',
};

ConnectDB();
app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use('/contextEngine', contextEngineRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});