import axios from 'axios';
import React, { Component } from 'react';
import Movie from './movie';
import DatePicker from 'react-datepicker2';

class ReservasMainPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      reservation: [],
    };
    this.calendarChange = this.calendarChange.bind(this);
  }

  async componentDidMount() {
    const reservation = await axios.get('/api/v1/reservation');
    this.setState({reservation: reservation.data})
  }

  async calendarChange(value){
    console.log(value.toJSON().slice(0,10))
    const reservations = await axios.get(`/api/v1/reservations/${value.toJSON().slice(0,10)}`);
    this.setState({reservation: reservations.data})
  }

  render() {
    return (
      <div className="col-8">
        <h3>Reservas Realizadas</h3>
        <DatePicker
          onChange={value => this.calendarChange(value)}
          value={this.state.value}
        />
        <table className="table">
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Cedula
              </th>
              <th>
                Celular
              </th>
              <th>
                E-mail
              </th>
              <th>
                Movie
              </th>
            </tr>
          </thead>
          <tbody>
          {this.state.reservation.map(element => (
            <tr key={element.id.toString()}>
              <td>
                {element.name}
              </td>
              <td>
                {element.cedula}

              </td>
              <td>
                {element.celphone}
              </td>
              <td>
                {element.email}
              </td>
              <td>
                <Movie id={element.movie_id} />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );

  }
}

export default ReservasMainPanel;
