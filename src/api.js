// import axios from 'axios';
import * as moviesFile from "./components/card.js";

const baseURL = "https://api.spotify.com/v1/recommendations?seed_artists=";

const seedArtists = [
  "06HL4z0CvFAxyc27GXpf02",
  "6eUKZXaKkcviH0Ku9w2n3V",
  "04gDigrS5kc9YWfZHwBETP",
];

const songsUsed = [
  {
    key: 123432154,
    poster_path:
      "https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b",
    title: "Lover",
    artist: "Taylor Swift",
    release_date: "2017-11-10",
    id: "0VE4kBnHJUgtMf0dy6DRmW",
    correct: true,
  },
];

const songQueued = [
  {
    key: 32134432435,
    poster_path:
      "https://i.scdn.co/image/ab67616d00001e025551adb75cf7c4737f93ed1d",
    artist: "Various Artists",
    title: "Sing 2",
    release_date: "2021-12-17",
    id: "3WCLzYOlSmLD2cy1RXdwUd",
    correct: null,
  },
];

const cardToPlay = [
  {
    key: 123432112530,
    poster_path:
      "https://i.scdn.co/image/ab67616d00001e0231dc2b6da1570a9c8929e0f6",
    artist: "CAKE",
    title: "Comfort Eagle",
    release_date: "2001-07-24",
    id: "3OOFEF20WqtsUPcRbPY3L7",
    correct: null,
  },
];

const authParameters = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body:
    "grant_type=client_credentials&client_id=" +
    process.env.REACT_APP_CLIENT_ID +
    "&client_secret=" +
    process.env.REACT_APP_CLIENT_SECRET,
};

console.log("scotttest makes a call");
const accessToken = await fetch(
  "https://accounts.spotify.com/api/token",
  authParameters
)
  .then((result) => result.json())
  .then((data) => data.access_token)
  .catch((err) => console.error(err));

var artistParameters = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
};

const newMovie = async () => {
  console.log("scotttest makes a call");
  await fetch(`${baseURL}${seedArtists.join(",")}`, artistParameters)
    .then((response) => response.json())
    .then((data) => {
      console.log("scotttest finaldata", data.tracks);
      moviesFile.addMovie(data.tracks);
    })
    .catch((err) => {
      console.error(err);
      // newMovie();
    });
};

export { newMovie, cardToPlay, songQueued, songsUsed };
