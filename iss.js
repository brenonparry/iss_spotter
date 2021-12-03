const request = require('request');

const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (!error)  { // !error = good! It works!
      const IP = JSON.parse(body);
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        return callback(Error(msg), null);
      } else {
        return callback(null, IP.ip);
      }
      
    } else {
      return callback(error, null);
    }

  });
};

const fetchCoordsByIP = (IP, callback) => {
  request(`https://freegeoip.app/json/${IP}`, (error, response, coords) => {
    if (!error)  { // !error = good! It works!
      const latLong = JSON.parse(coords);
      const latitude = latLong.latitude;
      const longitude = latLong.longitude;
      const finalCoords = {latitude: latitude, longitude: longitude};

      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${coords}`;
        return callback(Error(msg), null);
      } else {
        return callback(null, finalCoords);
      }
      
    } else {
      return callback(error, null);
    }
  });
};



const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, flyOver) => {

    if (!error) {
      const flytime = JSON.parse(flyOver);

      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${flyOver}`;
        return callback(Error(msg), null);
      } else {
        return callback(null, flytime);
      }
      
    } else {
      return callback(error, null);
    }
  });
};









module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };