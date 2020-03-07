const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded())
app.use(express.static(__dirname + '/../client/dist'));
const {getReposByUsername} = require('../helpers/github.js')
const {save}= require('../database/index.js');

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.username);
  getReposByUsername(req.body.username, (data) => {
    const info = JSON.parse(data);
    console.log('data is ' + info);
    for (let i = 0; i < info.length; i++) {
      save(info[i]);
    }
  })
  res.end();

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1127;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

