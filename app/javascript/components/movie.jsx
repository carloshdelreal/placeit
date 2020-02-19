import axios from 'axios'
import React, { Component } from 'react'

export default class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  };

  async componentDidMount(){
    const movie = await axios.get(`/api/v1/movie/${this.props.id}`);
    this.setState({name: movie.data.title})
  }

  render() {
    if (this.state.name === ''){
      return <div>{this.props.id}</div>
    }
    return(
      <div>
        {this.state.name}
      </div>
    );
  }
}