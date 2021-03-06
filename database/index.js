const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  html_url: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let oneRepo = {
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    html_url: repo.html_url,
    forks_count: repo.forks_count
  };
  console.log(oneRepo);
  // let result = null;
  Repo.findOne({ id: repo.id }, (err, adventure) => {
    console.log('err is: ' + err);
    if (!adventure) {
      const newRepo = new Repo(oneRepo);
      newRepo.save();
      console.log('success!!!!!!');
    }

    else {
      console.log('data: ' + adventure);
      console.log('The repo has already exists ' + adventure.html_url);
    }
  });
  // console.log(result);
  // if (result === null) {

  //   console.log('Saved successfully');
  // }
}

let getTop25 =(callback)=> {
  console.log('get top 25 from database');
  Repo.find({},{'sort': ['froks_count', 'dec']}, {
    "limit": 20,
  },(err, adventure) => {
    if (err) {
      console.log('some err in get top 25')
    }
    console.log('top 25 repos: ' + adventure);
    callback(adventure);
  })
}

module.exports.save = save;
module.exports.getTop = getTop25;