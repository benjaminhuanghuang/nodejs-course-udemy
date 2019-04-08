import { request } from "request";

const forecast = (latitude, longitude, callback)=>{
  const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
  request({url: url, json:true}, (error, response)=>{
    if(error)
    {
      callback('Unable to connect to server', undefined);
    }
    else if(response.body.error)
    {
      callback('Unable to find locatiopn', undefined);
    }
    else{
      const data = response.body.daily.data[0].summary;
      callback(undefined, data);
    }
  });
};


module.exports = forecast;