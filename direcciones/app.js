var number = require('random-numbers-generators');
var temperatura = require('f2c-thiagogaspar')
var Address = require('./addresees');
const request = require('request');
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${Address[number(1,1)].Street_Address}.json?access_token=pk.eyJ1Ijoic2VpYmVyIiwiYSI6ImNrN2V1eDAzNDAya24zZnFxNGx5eXAxaHYifQ.Pl_HTNzwFHgYniRjCdWJKA`;
request({ url, json: true}, (error, response) => {
    var cordenadas = response.body.features[0].center[1]+ ',' + response.body.features[0].center[0];
    console.log('las cordenadas son: ' + cordenadas);
    request({ url: `https://api.darksky.net/forecast/f62024de483774ac5731167044aebdda/${cordenadas}?lang=es`, json: true}, (error, response) => {
    console.log('La temperatura es: ' + temperatura(response.body.currently.temperature)+ '°C');
        });
});