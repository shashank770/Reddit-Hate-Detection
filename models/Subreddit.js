const mongoose = require('mongoose');

const subredditSchema = new mongoose.Schema({
  subreddit: {
    type: String,
    unique: true,
  },
  scores: [Number],
});

const Subreddit = mongoose.model('Subreddit', subredditSchema);

module.exports = Subreddit;