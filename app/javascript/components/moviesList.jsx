import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReserveModalComponent from './reserveMoviemodal';

export default class MoviesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      movieId: '',
    }
    this.reserve = this.reserve.bind(this)
    
    this.handleAccept = this.handleAccept.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
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

  reserve(id){
    this.setState({ movieId: id })
    this.triggerModal()
  }

  render() {
    const list = this.props.movies

    if (!list){
      return (<div>Loading...</div>)
    }
    return(
      <div className="container">
        <ReserveModalComponent
          movieId={this.state.movieId}
          show={this.state.show}
          handleClose={this.handleClose}
          handleAccept={this.handleAccept}
        />
        <div className="row">
          <h1>Movies List</h1>
        </div>
        <div className="row">
        { list.map(element => (
          <div key={element.id.toString()} className="col-4 d-flex">
            <div className="align-self-center">
              <button type="button" onClick={() => this.reserve(element.id)}>
                <img className="w-100 align-self-center" src={ element.Poster_url} alt={element.title} />
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}
