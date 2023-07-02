const express = require ("express");
const config = require("./config");
const mongoose = require("mongoose");
const app= express();
const candidatRoute = require("./routes/candidat");


// modification
mongoose.set('useFindAndModify', false);
//Connection à la base

mongoose.connect(config.db,{useNewUrlParser:true , useUnifiedTopology:true});
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error:'));
database.once('open', () => {
  console.log('Connected to the database.');
});

app.get('/', async (req, res) => {
    res.send('Done');
  });
  
app.use(express.json());
// tous les routes 

app.use('/candidates', require('./routes/candidat'));  // Cadndidate route 
app.use('/employer', require('./routes/employer')); //employer route
app.use('/application', require('./routes/application')); //employer route

//method for running the server

app.listen(config.listenPort,config.hostname,(error)=>{

    if (error) {
        console.log("erreur");
        process.exit(1);
    }
    console.log("running on ",config.listenPort);
})



