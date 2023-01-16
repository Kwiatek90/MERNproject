var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/DBProject",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("error połączenia bazy danych")
    }
    else
    {
        console.log("Baza danych podłączona!")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("error połączenia serwera")
    }
    else
    {
        console.log("Serwer włączony!")
    }
});