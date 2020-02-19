import axios from 'axios';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import ModalComponent from './createMoviemodal';
import DatePicker from 'react-datepicker2';
import MoviesList from './moviesList';

class MainPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      value: '',
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.calendarChange = this.calendarChange.bind(this);
  }

  async componentDidMount() {
    axios.defaults.headers.common['x-rapidapi-host'] = 'restcountries-v1.p.rapidapi.com';
    axios.defaults.headers.common['x-rapidapi-key'] = '1033cb5a0bmshe605dbb12c196fcp1dc3f9jsn7633a6f60df8';
    axios.defaults.headers.common.accepts = 'json';
    const movies = await axios.get('/api/v1/movie');
    this.setState({movies: movies.data})
  }


  handleAccept() {
    this.setState({ show: false });
  }

  handleClose() {
    this.setState({ show: false });
  }

  triggerModal() {
    this.setState({ show: true });
  }

  async calendarChange(value){
    console.log(value.toJSON().slice(0,10))
    const movies = await axios.get(`/api/v1/presentation/${value.toJSON().slice(0,10)}/movies`);
    this.setState({movies: movies.data})
  }

  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <div className="col-8">
        <ModalComponent
          show={this.state.show}
          handleClose={this.handleClose}
          handleAccept={this.handleAccept}
        />
        <div className="container p-4">
          <div className="row">
            <div className="col-6 text-left">
              <h1>Películas</h1>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-success" type="button" onClick={this.triggerModal}>Crear Nueva Pelicula</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <DatePicker
                onChange={value => this.calendarChange(value)}
                value={this.state.value}
              />
            </div>
          </div>
    
          <div className="row">
            <div className="col-12">
              <MoviesList movies={movies} />
            </div>
          </div>
    
        </div>
      </div>
    );

  }
}

export default MainPanel;
