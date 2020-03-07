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
  if (Repo.find({id: repo.id})) {
    console.log(Repo.find({id: repo.id}));
    console.log('The repo has already exists')
  } else {
    const newRepo = new Repo(oneRepo);
    newRepo.save();

}

module.exports.save = save;