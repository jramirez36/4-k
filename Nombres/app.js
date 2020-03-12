var number = require('random-numbers-generators')
const request = require('request')
const url = `https://swapi.co/api/people/${number(88)}/`;
request({ url, json: true}, (error, response) => {

    if(error)
    {
        console.log('no tienes internet');
    }
    console.log(response.body.name);
})