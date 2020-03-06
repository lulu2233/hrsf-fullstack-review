const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : Number,
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
  const newRepo = new Repo(repo);
  newRepo.save();
}

module.exports.save = save;