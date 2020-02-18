import { connect } from 'react-redux';
import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadNewMovie } from '../actions/index';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      sinopsis: '',
      url: '',
      date: ''
    }
    this.inputTitle = this.inputTitle.bind(this)
    this.inputSynopsis = this.inputSynopsis.bind(this)
    this.inputUrl = this.inputUrl.bind(this)
    this.inputDate = this.inputDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  inputTitle(event){
    this.setState({title: event.target.value})
  }

  inputSynopsis(event){
    this.setState({sinopsis: event.target.value})
  }
  
  inputUrl(event){
    this.setState({url: event.target.value})
  }

  inputDate(event){
    this.setState({date: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.createMovie();
  }

  async createMovie() {
    const { handleAccept } = this.props;
    const { title, sinopsis, url } = this.state
    const res = await axios.post(`/api/v1/movie/`, {
      movie: { title, Sinopsis:sinopsis, Poster_url:url }
    });
    if (res.status === 200){
      handleAccept();
      this.setState({
        title: '',
        sinopsis: '',
        url: '',
        date: ''
      })
    }
  }
  
  render() {
    const { show, handleClose } = this.props;
    
    let style;
    if (show) {
      style = { display: 'block' };
    } else {
      style = { display: 'none' };
    }

    return (
      <div>
        <div className="modal" style={style}>
          <div className="modal__box">
            <div>
              <h5>Create Movie</h5>
            </div>          
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" required value={this.state.title} onChange={this.inputTitle} className="form-control" id="title" placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="sinopsis">Synopsis</label>
                <textarea required value={this.state.sinopsis} onChange={this.inputSynopsis} className="form-control" id="sinopsis" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="poster_url">Poster URL</label>
                <input required value={this.state.url} onChange={this.inputUrl} type="text" className="form-control" id="poster_url" placeholder="Poster URL" />
              </div>
              <div className="form-group">
                <label htmlFor="dateMovie">date</label>
                <input required value={this.state.date} onChange={this.inputDate} type="date" className="form-control" id="dateMovie" placeholder="date" />
              </div>
              <div className="row justify-content-center p-3">
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-right">
                  <button 
                    onClick={handleClose}
                    type="button"
                    className="btn doctor__btn-call btn-block btn-sm rounded-pill"
                  >
                    Discard
                  </button>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-left">
                  <button type="submit" className="btn doctor__btn-book btn-block btn-sm rounded-pill">
                    Create
                  </button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = () => ({
});


// eslint-disable-next-line arrow-parens
const mapDispatchToProps = dispatch => ({
  loadNewMovie: (movie) => dispatch(loadNewMovie(movie)),
});

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  handleAccept: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
