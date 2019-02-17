require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var type = process.argv[2].toLowerCase();
var newLine = "\n";


switch (type) {
    case "concert-this": //if this argument in process do this 
        let artist = process.argv[3].toLowerCase();
        let link = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        console.log(link);
        break;
    case "spotify-this-song": 
        let song = process.argv[3].toLowerCase();
        console.log("spotify-this-song");
        break;
    case "movie-this":
        let movie = process.argv[3].toLowerCase();
        console.log("movie-this");
        break;
    case "do-what-it-says":
        console.log("do-what-it-says");
        break;
};

function concertThis() {

}

function spotifyThis() {

}

function movieThis() {

}

function doWhatItSays() {
    
}