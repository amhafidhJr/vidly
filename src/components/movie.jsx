import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";

export class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <div>
        <div className="row mt-5">
          <div className="col-12 ">
            {this.allMovies()}
            <hr></hr>
          </div>
        </div>
        <div className="row mt-2">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col">Action</th>
              </thead>
              <tbody>{this.getMovies()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  getMovies() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td scope="col">
          {movie.title}
        </td>
        <td scope="col">
          {movie.genre.name}
        </td>
        <td scope="col">
          {movie.numberInStock}
        </td>
        <td scope="col">
          {movie.dailyRentalRate}
        </td>
        <td scope="col">
         <button onClick={ () => this.deleteMovie(movie)} className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    ));
  }

  allMovies() {
    if (this.state.movies.length > 0) {
    let countMovies = this.state.movies.length
      return (
        <span class="label label-default">Showing {countMovies} int the database </span>
      );
    }
    return <span class="label label-default">No movies in the database </span>;
  }

  deleteMovie = (movie) =>{
        const movies = this.state.movies.filter( m => m._id !== movie._id );
        this.setState({movies});
  }
}
