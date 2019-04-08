import { request } from "request";

const forecast = (latitude, longitude, callback)=>{
  const url = "https://api.darksky.net/";
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