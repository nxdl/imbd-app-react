import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'bloomer';
import 'bulma/css/bulma.css';
import MoviesList from './MoviesList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }

  async componentDidMount() {
    const results = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed");
    const data = await results.json();
    this.movies = data.results;
    if (this.state.movies.length < 1) {
      this.setState({ movies: this.movies })
    }
    this.setState({
      movies: this.movies,
      loading: false
    });
  }

  filterMovies(filterText) {
    const currentMovies = this.state.movies;
    const filteredMovies = currentMovies.filter(
      m => m.title.toLowerCase().indexOf(filterText) !== -1
    )
    if (filterText == 0) {
      this.setState({ movies: this.movies })
    } else {
      this.setState({
        movies: filteredMovies
      })
    }
  }


  render() {
    let content;
    if (this.state.loading) {
      content = <h1> loading... </h1>
    } else {
      content = <MoviesList movies={this.state.movies} />
    }

    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Now Playing in Theaters</h1>
          </header>
          <input className="searchBar" placeholder="Search..." onChange={(text) => this.filterMovies(text.target.value)} />
          <Container>
            {content}
          </Container>
        </div>

      </Container>
    );
  }
}

export default App;
