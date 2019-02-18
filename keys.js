console.log('Your API Keys are Correct!');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
  secret: process.env.OMDB_KEY
}

exports.bands = {
  secret: process.env.BAND_KEY
}