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

app.get('/undercabinet',(req,res) =>{

    return res.sendFile(__dirname + "/views/undercabinet.html");
})

app.get('/wallmount',(req,res) =>{

    return res.sendFile(__dirname + "/views/wallmount.html");
})

app.get('/account',(req,res) =>{

    return res.sendFile(__dirname + "/views/sign-in.html");
})

app.get('/sign-up',(req,res) =>{

    return res.sendFile(__dirname + "/views/sign-up.html");
})

app.get('/forgetpass',(req,res) =>{

    return res.sendFile(__dirname + "/views/forgetpassword.html");
})


app.get('/promotion',(req,res) =>{

    return res.sendFile(__dirname + "/views/promotion.html");
})

app.listen(3001);