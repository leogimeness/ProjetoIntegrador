const express = require('express');
const app = express();
const path = require('path');

//define a pasta public como sendo a pasta de arquivo estatico
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res) =>{

    return res.sendFile(__dirname + "/views/index.html");
})

app.get('/island',(req,res) =>{

    return res.sendFile(__dirname + "/views/island.html");
})

app.get('/profissional',(req,res) =>{

    return res.sendFile(__dirname + "/views/profissional.html");
})

app.listen(3001);