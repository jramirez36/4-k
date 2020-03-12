const request = require('request')
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Colima.json?access_token=pk.eyJ1Ijoic2VpYmVyIiwiYSI6ImNrN2V1eDAzNDAya24zZnFxNGx5eXAxaHYifQ.Pl_HTNzwFHgYniRjCdWJKA';
request({ url, json: true}, (error, response) => {

    if(error)
    {
        console.log('algo salio mal');
    }
    console.log(response.body.features[0].bbox);
})