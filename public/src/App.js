import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Movie from './Components/Movie/Movie';
import Modal from './Components/Modal/Modal';
import Options from './Components/Options/Options';
import { genres, url } from './config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      isLoading: false,
      hasErrors: false,
      showModal: false,
      options: {
        genre: 0
      }
    };
    this.searchMovieHandler = this.searchMovieHandler.bind(this);
    this.resetMovieHandler = this.resetMovieHandler.bind(this);
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
    this.selectGenreHandler = this.selectGenreHandler.bind(this);
  };

  toggleModalHandler() {
    this.setState({
      showModal: !this.state.showModal
    })
  }


  resetMovieHandler() {
    this.setState({movie: null});
  }

  async searchMovieHandler() {
    this.setState({isLoading: true});
    let movie;
    try{
      movie = await this.getData();
    } catch(err) {
      this.setState({isLoading: false, hasErrors: true});
      return;
    }

    this.setState({isLoading: false, movie});
  };

  async getData() {
    const genre = this.state.options.genre;
    const res = await fetch(`${url}/films/${genre}`)
    const movie = await res.json();
    movie.data.rating = movie.rating;
    return movie.data;
  }

  selectGenreHandler(ev) {
    const genre = ev.target.value;
    this.setState({options: {genre: genre}})
  }

  render() {
    return (
        <div className="App">
          <Header resetMovieHandler={this.resetMovieHandler}/>
          {this.state.movie? <Movie movie={this.state.movie}/>:
          <Hero searchMovieHandler={this.searchMovieHandler} toggleModalHandler={this.toggleModalHandler} isLoading={this.state.isLoading}/>
        }
        {this.state.hasErrors? 'Network Error' : ''}
          <Modal className="Preferences-modal" show={this.state.showModal} toggleHandler={this.toggleModalHandler}>
            <h3>Preferences</h3>
            <label>Жанр:</label>
            <Options onChange={this.selectGenreHandler} options={genres} filter="genre"/>
            <button onClick={this.toggleModalHandler}>Apply</button>
          </Modal>
        </div>
      );
    }
}

export default App;
