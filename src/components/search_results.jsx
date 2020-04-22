import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

class SearchResults extends Component{

  renderArrivalDetails(location){
  if(!location.arrivalDetails){
    return;
  }
    return _.map(location.arrivalDetails, arrivalDetail => {
      return(
         <div className="route" key={arrivalDetail.arrivalTime}>
            <span className="route-detail airline">{arrivalDetail.airportName}</span>
            <span className="route-detail time">{arrivalDetail.arrivalTime}</span>
         </div>
    );
  });
  }

  renderDepartureDetails(location){
    if(!location.departureDetails){
      return;
    }
    return _.map(location.departureDetails, departureDetail =>{
      return(
         <div className="route" key={departureDetail.arrivalTime}>
            <span className="route-detail airline">{departureDetail.airportName}</span>
            <span className="route-detail time">{departureDetail.arrivalTime}</span>
         </div>
    );
  });
  }

  renderLocations(){
    if(Object.keys(this.props.locations).length === 0){
      return <div>Please enter a Valid City or Airport Code </div>;
    }
    return _.map(this.props.locations, location => {
      return (
        <div className="App" key={location.iata}>
        <div className="destination">
            <h2 className="location">{location.city}, {location.country}</h2>
              <div className="routes">
              { this.props.componentSelected === 'inbound' && Object.keys(this.props.locations).length === 1 ? this.renderDepartureDetails(location): null }
              { this.props.componentSelected === 'outbound' && Object.keys(this.props.locations).length === 1 ? this.renderArrivalDetails(location): null }
              </div>
            { Object.keys(this.props.locations).length === 1 ? this.renderDestionationMap(location) : null }

            <p className="airport"><span className="name">{location.name}</span> <span className="iata">({location.iata})</span></p>

        </div>
      </div>
      );
    });
  }

  renderDestionationMap(location){
    return(
      <div>
        <iframe className="destination-map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=3&hl=en&output=embed`}></iframe>
      </div>
    )
  }
      render(){
        return(
          <div>
            {this.renderLocations()}
          </div>
        )
      }
}

SearchResults.defaultProps = {
componentSelected: 'outbound'
}

function mapStateToProps(state){
  return { locations: state.locations };
}

SearchResults.propTypes = {
  componentSelected: PropTypes.string,
  locations: PropTypes.object
};


export default connect(mapStateToProps)(SearchResults)
