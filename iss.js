const request = require('request');

const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (!error)  { // !error = good! It works!
      const IP = JSON.parse(body);
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        return callback(Error(msg), null);
      } else {
        return callback(null, IP);
      }
      
    } else {
      return callback(error, null);
    }

  });
};













module.exports = { fetchMyIP };