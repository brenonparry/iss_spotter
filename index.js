const  { nextISSTimesForMyLocation } = require('./iss');





const printPassTimes = function(flytime) {
  // console.log(flytime.response[1][duration])
  
  const datetime = new Date(0);
  datetime.setUTCSeconds(flytime.response[0]['risetime']);
  const duration = flytime.response[0]['duration'];
  console.log(`Next pass at ${datetime} for ${duration} seconds!`);
};

nextISSTimesForMyLocation((error, flytime) => {
if (error) {
  return console.log("It didn't work!", error);
}
// success, print out the deets!
printPassTimes(flytime);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP: ' , ip);
// });

// fetchCoordsByIP('174.7.85.204', (error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned latitude/longittude: ' , ip);
// });

// const exampleCoords = { latitude: '49.3678', longitude: '-122.9278' };

// fetchISSFlyOverTimes(exampleCoords, (error, passOverTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passOverTimes);

// });


