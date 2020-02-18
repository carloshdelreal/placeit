import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import ModalComponent from './createMoviemodal';
import { SingleDatePicker } from 'react-dates';

class MainPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      calendarFocused: false,
      createdAt: null,
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.triggerModal = this.triggerModal.bind(this);

  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  handleDateChange(event) {
    this.setState({ chosenDate: event.target.value })
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

  render() {
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
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                id="datep"
              />
            </div>
          </div>
    
          <div className="row">
            <div className="col-12">
              Movies List
            </div>
          </div>
    
        </div>
      </div>
    );

  }
}

export default MainPanel;
