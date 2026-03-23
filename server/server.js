const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
    res.json([
      {
      "Title":"Spider-Man",
      "Released":"2002-05-03",
      "Runtime":121,
      "Genres":["Action","Adventure","Sci-Fi"],
      "Directors":["Sam Raimi"],
      "Writers":["Stan Lee","Steve Ditko","David Koepp"],
      "Actors":["Tobey Maguire","Kirsten Dunst","Willem Dafoe"],
      "Plot":"After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 73,
      "imdbRating": 7.4
    },
    { "Title":"The Amazing Spider-Man",
      "Released":"2012-07-03",
      "Runtime": 136,
      "Genres": ["Action", "Sci-Fi"],
      "Directors": ["Marc Webb"],
      "Writers": ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
      "Actors": ["Andrew Garfield", "Emma Stone", "Rhys Ifans"],
      "Plot":"After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
      "Metascore": 66,
      "imdbRating": 6.9
    },
    {
      "Title":"Spider-Man: Homecoming",
      "Released":"2017-07-07",
      "Runtime": 133,
      "Genres": ["Action", "Adventure", "Sci-Fi"],
      "Directors": ["Jon Watts"],
      "Writers": ["Jonathan Goldstein", "John Francis Daley", "Jon Watts"],
      "Actors": ["Tom Holland", "Michael Keaton", "Robert Downey Jr."],
      "Plot":"Peter Parker tries to stop Adrian 'The Vulture' Toomes from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_SX300.jpg",
      "Metascore": 73,
      "imdbRating": 7.4
    }
    
  ]);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

