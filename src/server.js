const express = require ("express");
const config = require("./config");
const mongoose = require("mongoose");
const app= express();
const candidatRoute = require("./routes/candidat");


//connecting to the db
/*try {
    mongoose.connect(config.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}, (err) => {

        if (err) throw err;
        console.log('connected database');
    })
 } catch (error) {
   console.log(error);
}
*/

mongoose.connect(config.db,{useNewUrlParser:true , useUnifiedTopology:true});
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error:'));
database.once('open', () => {
  console.log('Connected to the database.');
});

app.get('/', async (req, res) => {
    res.send('Done');
  });
  
// tous les routes 
app.use(express.json());
app.use('/candidates', require('./routes/candidat'));

app.use("/candidates",candidatRoute);


//method for running the server

app.listen(config.listenPort,config.hostname,(error)=>{

    if (error) {
        console.log("erreur");
        process.exit(1);
    }
    console.log("running on ",config.listenPort);
})



