# LIRI
LIRI is a Language Interpretation and Recognition Interface. LIRI takes the user's command line input and returns the desired information.

## Getting Started
LIRI is a node program that requires the installation of: 
1. [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
2. [Request](https://www.npmjs.com/package/request)
3. [Moment](https://www.npmjs.com/package/moment)
4. [DotEnv](https://www.npmjs.com/package/dotenv)

Everything is in the package.json, so all you need to do to install all of these is the run
```
npm install
```
in your terminal after cloning this repository.

## Spotify
The next step is to get a client id and client secret from the Spotify Web API.
Just follow these steps.

* Step One: Visit <https://developer.spotify.com/my-applications/#!/>
   
* Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

* Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

* Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

You will use these values in the .env file. It should look like this: 
```
# Spotify API keys

SPOTIFY_ID='your_client_id'
SPOTIFY_SECRET='your_client_secret'
```
No quotes.

## Commands
Everything should be ready to go now. LIRI has four commands.

1. `node concert-this <artist_name>`

* This command searches the Bands in Town API and returns the follow information about the artist's up coming event.
```
 * Name of the venue
 * Venue location
 * Date of the Event (use moment to format this as "MM/DD/YYYY")
```
2. `node spotify-this-song <song_name>`

* This command searches the Spotify Web API for the song and returns the following information about the song.
```
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
```
3. `node movie-this <movie_title>`
* This command searches the OMDB API for the movie and returns the following information.
```
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
```
4. `node do-what-it-says`
* I'll leave this one as a surprise. It's one of the other 3.

## Learning Points
This project was to practice node, CLI, npm, and requesting API data. It was a nice break from HTML and CSS. It is also the first time we did not use a website to interact with our JavaScript. This assignment was not the most challenging, but it is also the very beginning of our adventure with node.js. I can tell this will be very powerful for future material.

## Author
[Bryan Liang](https://github.com/liangbryan2)