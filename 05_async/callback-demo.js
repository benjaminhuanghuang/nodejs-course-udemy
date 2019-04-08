const geocode = (address, callback)=>{
  setTimeout(()=>{
    const data = {
      latitude: 0,
      longtitude: 0
    };

    callback(data);
  }, 2000);
};



geocode('San Jose', (data)=>{
  console.log(data);
});