const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
    {
      Title: "Weathering with You",
      Released: "2020-01-17",
      Runtime: 112,
      Genres: ["Animation", "Drama", "Fantasy"],
      Directors: ["Makoto Shinkai"],
      Writers: ["Makoto Shinkai"],
      Actors: ["Kotaro Daigo", "Nana Mori", "Tsubasa Honda"],
      Plot: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMmJiYWI4ZjktMzgyZS00MjBiLThmOTYtZWJmOTUzOTFkMTFiXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 72,
      imdbRating: 7.5
    },
    {
        Title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
        Released: "2025-09-12",
        Runtime: 155,
        Genres: ["Animation", "Action", "Adventure"],
        Directors: ["Haruo Sotozaki", "Hikaru Kondô"],
        Writers: ["Koyoharu Gotouge", "Hikaru Kondô"],
        Actors: ["Zach Aguilar", "Saeko Akiho", "Yôhei Azakami"],
        Plot: "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGQ3YWUzYjEtMTJiYy00ZjQ0LWI0YjktYjhiNGVhNGExYTM3XkEyXkFqcGc@._V1_SX300.jpg",
        Metascore: 67,
        imdbRating: 8.4
    },
    {
      Title: "Chainsaw Man - The Movie: Reze Arc",
      Released: "2025-10-24",
      Runtime: 100,
      Genres: ["Animation", "Action", "Adventure"],
      Directors: ["Tatsuya Yoshihara"],
      Writers: ["Tatsuki Fujimoto", "Hiroshi Seko"],
      Actors: ["Kikunosuke Toya", "Shiori Izawa", "Tomori Kusunoki"],
      Plot: "Denji encounters a new romantic interest, Reze, who works at a coffee café.",
      Poster: "https://m.media-amazon.com/images/M/MV5BZmMzNGVhODktYmU5MS00MDg1LThlNTEtNTMyYTg5MDA0Njk4XkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 71,
      imdbRating: 8.4
  }
  ];

  res.json(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

