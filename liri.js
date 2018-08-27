require("dotenv").config();
var keys = require('./keys.js');
// console.log(keys.spotify);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// console.log(spotify);
var request = require('request');
var moment = require('moment');
var fs = require('fs');
var command = process.argv[2];
var string = process.argv.slice(3).join(' ');
// console.log(string);

liri(command, string);

function liri(command, string) {
    if (command === 'spotify-this-song') {
        song(string);
    }
    else if (command === 'movie-this') {
        movie(string);
    }
    else if (command === 'concert-this') {
        concert(string);
    }
    else if (command === 'do-what-it-says') {
        doIt();
    }
}

function doIt() {
    fs.readFile('random.txt', 'utf8', function(error, data) {
        if (error) {
            return console.log(error)
        }
        liri(data.split(',')[0], data.split(',')[1]);
    })
}

// doIt();

function concert(artist) {
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (error) {
            console.log(error);
        }
        var events = JSON.parse(body);
        // just display first 10
        for (var i = 0; i < 10; i++) {
            console.log("Event for " + artist);
            console.log("Location: " + events[i].venue.name);
            console.log('Addres: ' + events[i].venue.city + " " + events[i].venue.region);
            console.log("Date: " + moment(events[i].datetime).format('MM/DD/YYYY'));
            console.log("============================================");
        }
    })
}

// concert('drake');

function song(title) {
    if (title) {
        spotify.search({
            type: 'track',
            query: title
        }, function (err, data) {
            if (err) {
                return console.log("error: ", err)
            }
            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].preview_url);
            console.log(data.tracks.items[0].album.name);

        });
    } else {
        spotify.search({
            type: 'track',
            query: 'the sign ace of base'
        }, function (err, data) {
            if (err) {
                return console.log("error: ", err)
            }
            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].preview_url);
            console.log(data.tracks.items[0].album.name);
        });

    }
}

// song();

function movie(name) {
    var movie;
    if (name) {
        request('http://www.omdbapi.com/?t=' + name + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
            if (error) {
                return console.log("Error: ", error);
            }
            movie = JSON.parse(body);
            console.log("Title: " + movie['Title']);
            console.log('Year: ' + movie['Year']);
            console.log('imdb Rating: ' + movie['imdbRating']);
            console.log('Rotten Tomatoes Rating: ' + movie['Ratings'][1]['Value']);
            console.log('Country: ' + movie['Country']);
            console.log('Language: ' + movie['Language']);
            console.log('Plot: ' + movie['Plot']);
            console.log('Actors: ' + movie['Actors']);
        })
    } else {
        request('http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy', function (error, response, body) {
            if (error) {
                return console.log("Error: ", error);
            }
            movie = JSON.parse(body);
            console.log("Title: " + movie['Title']);
            console.log('Year: ' + movie['Year']);
            console.log('imdb Rating: ' + movie['imdbRating']);
            console.log('Rotten Tomatoes Rating: ' + movie['Ratings'][1]['Value']);
            console.log('Country: ' + movie['Country']);
            console.log('Language: ' + movie['Language']);
            console.log('Plot: ' + movie['Plot']);
            console.log('Actors: ' + movie['Actors']);
        });
    }
}

// movie();

