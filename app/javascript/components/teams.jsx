import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import { countriesToDict, teamsToDict } from '../scripts/continentClassify';

// eslint-disable-next-line react/prefer-stateless-function
class Teams extends React.Component {
  render() {
    const { participantsList } = this.props;

    if (!participantsList) {
      return (<div>Loading...</div>);
    }

    let list = Object.values(participantsList);
    list = list.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      return 1;
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            { list.map((item) => (
              <div key={item.code} className="country col-4 col-sm-4 col-md-3">
                <h5>{ `${item.title}` }</h5>
                <img src={`https://salnazi.000webhostapp.com/country_api/flags/${item.code.toLowerCase().slice(0,2)}.svg`} alt={`flag of ${item.name}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Teams.defaultProps = {
  participantsList: [],
};

Teams.propTypes = {
  participantsList: PropTypes.shape({}),
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  participantsList: state.participantsList,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
