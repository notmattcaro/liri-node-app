require("dotenv").config();

//dependencies
const fs = require("fs");
const axios = require("axios");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const moment = require("moment");

//grabs my API Info
const spotifyId = keys.spotify.id;
const spotifyKey = keys.spotify.secret;
const omdbKey = keys.omdb.secret;
const bandKey = keys.bands.secret;

//user input and query
var input = process.argv[2].toLowerCase();
var userQuery = process.argv.slice(3).join(" ");

//new line
var newLine = "\n";

//Functions for switch 
function concertThis() {
    if (!userQuery) {
        userQuery = "John Mayer";
    }
    axios.get("https://rest.bandsintown.com/artists/" + userQuery + "/events", {
        params: {
            app_id: bandKey
        }
    })
        .then(function (returned) {
            let results = returned.data;
            console.log("success!");
            for (let i = 0; i < results.length; i++) {
                console.log("- S - T - O - P ---- " + i + " ---- " + newLine);
                console.log("Venue: " + results[i].venue.name);
                console.log("Time: " + moment(results[i].datetime).format("MM/DD/YYYY, hh:mm a"));
                console.log("City: " + results[i].venue.city + "     Country: " + results[i].venue.country + newLine);
                console.log("- Y - E - E - T ---- N - E - X - T ---- S - T - O - P" + newLine);
            }
        }).catch(function (error) {
            console.log("you got an error");
            console.log(newLine);
            console.log(error);
        });
}

function spotifyThis() {
    if (!userQuery) {
        userQuery = "Glorious"
    }
    var spotify = new Spotify({
        id: spotifyId,
        secret: spotifyKey
    });
    spotify
        .search({ type: 'track', query: userQuery, limit: 5 })
        .then(function (response) {
            for (let j = 0; j < response.tracks.items.length; j++) {
                console.log(" ");
                console.log("Tune find number: " + j + newLine);
                console.log("Artist: " + response.tracks.items[j].album.artists[0].name); //gets artist name
                console.log("Album Name: " + response.tracks.items[j].album.name); //gets album name
                console.log("Song: " + response.tracks.items[j].name); //gets song name
                console.log("Preview URL: " + response.tracks.items[j].preview_url + newLine); //gets preview url
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movieThis() {
    if (!userQuery) {
        userQuery = "Avengers Infinity War";
    }
    axios.get("http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + userQuery)
        .then(function (returned) {
            console.log(newLine + "BEEP BOOP BOP! WATCH YOUR MOVIE DROP!" + newLine);
            console.log("Title: " + returned.data.Title);
            console.log("Released: " + returned.data.Year);
            console.log("Rated: " + returned.data.Rated);
            console.log(returned.data.Ratings[1].Source + " Rating: " + returned.data.Ratings[1].Value);
            console.log("Country: " + returned.data.Country);
            console.log("Language: " + returned.data.Language);
            console.log("Plot: " + returned.data.Plot);
            console.log("Actors: " + returned.data.Actors + newLine);
        }).catch(function (error) {
            console.log("you got an error");
            console.log(newLine);
            console.log(error + newLine);
        });
}

function doWhatItSays() {
    console.log("do-what-it-says");
}

//switch results depending on input
switch (type = input) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
};

