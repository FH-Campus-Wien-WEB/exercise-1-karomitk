const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
pp.get('/movies', function (req, res) {
  res.json([
    {
      "Title":"Spider-Man",
      "Released":"2002-05-03",
      "Runtime": 121,
      "Genres":["Action, Adventure, Sci-Fi"],
      "Directors":["Sam Raimi"],
      "Writers":["Stan Lee, Steve Ditko, David Koepp"],
      "Actors":["Tobey Maguire, Kirsten Dunst, Willem Dafoe"],
      "Plot":"After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":"73",
      "imdbRating":"7.4"
    },
    {
      "Title": "Inception",
      "Released": "2010-07-16",
      "Runtime": 148,
      "Genres": ["Action", "Adventure", "Sci-Fi"],
      "Directors": ["Christopher Nolan"],
      "Writers": ["Christopher Nolan"],
      "Actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "Plot": "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkzNzQtYzY0MC00ZjQ2LWE2NjAtODhiZjg1OTAxYzhlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Metascore": 74,
      "imdbRating": 8.8
    },
    {
      "Title": "The Matrix",
      "Released": "1999-03-31",
      "Runtime": 136,
      "Genres": ["Action", "Sci-Fi"],
      "Directors": ["Lana Wachowski", "Lilly Wachowski"],
      "Writers": ["Lana Wachowski", "Lilly Wachowski"],
      "Actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "Plot": "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3NTAtNDQ1Zi00ZjQxLTlhNjAtYzYzYzY0YzU2ZTg2XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
      "Metascore": 73,
      "imdbRating": 8.7
    }
  ]);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

