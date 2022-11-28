const movies = [
  {
    _id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: {
      _id: 1,
      name: "Science Fiction",
    },
    numberInStock: 6,
    dailyRentalRate: 2.6,
    publishDate: "2018-01-03",
  },
  {
    _id: 2,
    title: "The Godfather",
    year: 1995,
    genre: {
      _id: 2,
      name: "Science Fiction",
    },
    numberInStock: 6,
    dailyRentalRate: 2.6,
    publishDate: "2018-01-03",
  },
  {
    _id: 3,
    title: "Inception",
    year: 1996,
    genre: {
      _id: 3,
      name: "Drama",
    },
    numberInStock: 5,
    dailyRentalRate: 3.3,
    publishDate: "2018-01-03",
  },
  {
    _id: 4,
    title: "Redemption",
    year: 1997,
    genre: {
      _id: 4,
      name: "Science Fiction",
    },
    numberInStock: 6,
    dailyRentalRate: 2.6,
    publishDate: "2018-01-03",
  },
  {
    _id: 5,
    title: "TV Movie",
    year: 1998,
    genre: {
      _id: 5,
      name: "Romance",
    },
    numberInStock: 8,
    dailyRentalRate: 3.3,
    publishDate: "2018-01-03",
  },
  {
    _id: 6,
    title: "The Godfather",
    year: 1999,
    genre: {
      _id: 6,
      name: "Science Fiction",
    },
    numberInStock: 8,
    dailyRentalRate: 3.3,
    publishDate: "2018-01-03",
  },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(movie => movie._id === id);
}

export function saveMovie(movie) {
    
}
