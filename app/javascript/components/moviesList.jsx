import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MoviesList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const list = this.props.movies

    if (!list){
      return (<div>Loading...</div>)
    }
    return(
      <div className="container">
        <div className="row">
          <h1>Movies List</h1>
        </div>
        { list.map(element => (
          <div key={element.id.toString()} className="row">
            <div className="col">
              <img src={ element.Poster_url} alt={element.title} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

