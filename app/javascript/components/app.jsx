/* eslint-disable arrow-parens */
/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Home from './home';
import Reservas from './reservas'
const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
axios.defaults.headers.common.accepts = 'json';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // async componentDidMount() {
  //   const { loadCountries, loadTeams, loadGames, loadGoals, loadPeople, loadRounds, loadParticipants, loadPDict } = this.props;
  //   axios.defaults.headers.common['x-rapidapi-host'] = 'restcountries-v1.p.rapidapi.com';
  //   axios.defaults.headers.common['x-rapidapi-key'] = '1033cb5a0bmshe605dbb12c196fcp1dc3f9jsn7633a6f60df8';
  //   axios.defaults.headers.common.accepts = 'json';
  //   const countries = await axios.get('https://restcountries-v1.p.rapidapi.com/all');

  //   axios.defaults.headers.common['x-rapidapi-host'] = 'montanaflynn-fifa-world-cup.p.rapidapi.com';
  //   axios.defaults.headers.common['x-rapidapi-key'] = '1033cb5a0bmshe605dbb12c196fcp1dc3f9jsn7633a6f60df8';
  //   axios.defaults.headers.common.accepts = 'json';
  //   const teams = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams');
  //   const games = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/games');
  //   const goals = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/goals');
  //   const persons = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/persons');
  //   const rounds = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/rounds');

  //   loadCountries(countries.data);
  //   loadTeams(teams.data);
  //   loadGames(games.data);
  //   loadGoals(goals.data);
  //   loadPeople(persons.data);
  //   loadRounds(rounds.data);
  //   loadParticipants(partTeams);

  //   const peopleDict = {};
  //   persons.data.forEach((person) => {
  //     peopleDict[person.id] = person;
  //   });

  //   loadPDict(peopleDict);
  // }

  
  render() {
    return (
      <BrowserRouter>
        <div className="notificationsFrame">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservas" component={Reservas} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadTeams: PropTypes.instanceOf(Function).isRequired,
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  loadTeams: teams => dispatch(loadTeams(teams)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
