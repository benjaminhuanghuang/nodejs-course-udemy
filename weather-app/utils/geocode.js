import { request } from "request";

const geocode = (address, callback)=>{
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
  request({url: url, json:true}, (error, response)=>{
    if(error)
    {
      callback('Unable to connect to server', undefined);
    }
    else if(response.body.feature.length === 0)
    {
      callback('Unable to find locatiopn', undefined);
    }
    else{
      const data = {
        latitude: response.body.features[0].center[0],
        longtitude: response.body.features[0].center[1],
        location:response.body.features[0].place_name
      };
      callback(undefined, data);
    }
  });
};


module.exports = geocode;