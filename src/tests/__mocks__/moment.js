// get the original module
// const moment = require.requireActual('moment');
const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};

// export default (timestamp = 0) => {
//   // if timestamp is not passed, this line always return moment(0)
//   // so it is consistent during snapshot
//   // in real app, we dont use mock for moment, so every time the call returns 
//   // different value
//   return moment(timestamp); 
// };