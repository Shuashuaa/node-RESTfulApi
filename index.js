//import express
const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 8021;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

//get request

app.get('/sample', (req, res) => {
    res.status(200).send({
        tshirt: 'shirt?',
        size: 'large'
    });
});

//request with parameter

app.post('/sample/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({ message: 'We need a Logo' })
    }

    res.send({
        tshirt: `shirt logo with your ${logo} and Id of ${id}`
    })
})

//get request - api

app.get('/pokemon', (req, res) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
    .then(apiRes => {
        console.log(apiRes.data)
        res.send(apiRes.data);
    })
    .catch(err => { 
        console.log(err);
        res.status(500).send("Error fetching data from PokeAPI");
    });
});

//get request w/ params - api

app.get('/pokemon/:name', (req, res) => {
    const { name } = req.params;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(apiRes => {
        console.log(apiRes.data)
        res.send(apiRes.data);
    })
    .catch(err => { 
        console.log(err);
        res.status(500).send("Error fetching data from PokeAPI");
    });
});

//get post w/ params - api
//get request mysql
//post request mysql