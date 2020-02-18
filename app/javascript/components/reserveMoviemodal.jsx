import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReserveModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      celphone: '',
      cedula: '',
      email: ''
    }
    this.inputName = this.inputName.bind(this)
    this.inputCelphone = this.inputCelphone.bind(this)
    this.inputCedula = this.inputCedula.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  inputName(event){
    this.setState({name: event.target.value})
  }

  inputCelphone(event){
    this.setState({celphone: event.target.value})
  }
  
  inputCedula(event){
    this.setState({cedula: event.target.value})
  }

  inputEmail(event){
    this.setState({email: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.createMovie();
  }

  async createMovie() {
    const { handleAccept, movieId } = this.props;
    const { name, celphone, cedula, email } = this.state
    const res = await axios.post(`/api/v1/reservation/`, {
      reservation: { name, celphone, cedula, email, movie_id: movieId }
    });
    if (res.status === 200){
      handleAccept();
      this.setState({
        name: '',
        celphone: '',
        cedula: '',
        email: ''
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
              <h5>Reservar</h5>
            </div>          
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" required value={this.state.name} onChange={this.inputName} className="form-control" id="name" placeholder="Nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="celphone">Celular</label>
                <input type="text" required value={this.state.celphone} onChange={this.inputCelphone} className="form-control" id="celphone" />
              </div>
              <div className="form-group">
                <label htmlFor="cedula">cedula</label>
                <input required value={this.state.cedula} onChange={this.inputCedula} type="text" className="form-control" id="cedula" placeholder="Cédula" />
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input required value={this.state.email} onChange={this.inputEmail} type="email" className="form-control" id="email" placeholder="Email" />
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

ReserveModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  handleAccept: PropTypes.instanceOf(Function).isRequired,
};

export default ReserveModalComponent;
