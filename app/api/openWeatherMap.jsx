var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6e75610f139fd87883cada77443a5c0a&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    
    /*return new Promise(function(resolve, reject) {
      axios.get(requestUrl).then(function(res) {
        if(res.data.cod && res.data.message) {
          reject(res.data.message);
        } else {
          resolve(res.data.main.temp);
        }
      }, function(res) {
        reject(res.data.message);
      });
    });*/

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}