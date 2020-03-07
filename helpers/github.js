const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request.get(options, (err, response, body) => {
    if (err) {
      console.log('ERROR!');
    }
    // else {
    //   console.log('typeof' + typeof body);
    //   const info = JSON.parse(body);
    // //   console.log('typeof' + typeof body);
    //   console.log('after parse whats the type of ' + typeof info);
    //   console.log('whats result: ' + info[0].html_url);
    callback(body);
  });
}


module.exports.getReposByUsername = getReposByUsername;