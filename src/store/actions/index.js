
import airports from '../../../data/airports.json';
import airlines from '../../../data/airlines.json';

export const FETCH_LOCATIONS = 'fetch_locations';

//This method is used to return the matching aiport lists for the searched City
//returns the list of Airports
function checkMatchingAirport(airport,searchTerm){
  if(!airport){
    return;
  }
  if(airport.city.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || airport.iata.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || airport.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
    // Exclude the LAX aiport from the Result Set
    if(airport.city.toLowerCase() === 'los angeles'|| airport.iata.toLowerCase() === 'lax' || airport.name.toLowerCase() === 'Los Angeles International Airport'){
      return;
    }
    return airport;
  }
}

//This method is used to return the matching airlines for the Airports
//returns the list of Airports with arrival and Departure Details
function getMatchingAirlines(matchedAirports){
  Object.keys(matchedAirports).filter(function(matchedAirport) {
    let arrivalDetailsList = [];
    let departureDetailsList = [];
    Object.keys(airlines).filter(function(airline) {
      Object.keys(airlines[airline].routes).filter(function(route){
        //if the departure Aiport  is matched with "LAX aiport" then set the departure time from destination
        if(airlines[airline].routes[route].departure.icao === 'KLAX' &&
           airlines[airline].routes[route].arrival.icao === matchedAirports[matchedAirport].icao){
          const arrivalDetails = {
            airportName: airlines[airline].name,
            arrivalTime: airlines[airline].routes[route].departure.time
          }
          arrivalDetailsList.push(arrivalDetails);
          matchedAirports[matchedAirport]["arrivalDetails"] = arrivalDetailsList;
        }
        //If Arrival Airport  is matched with "LAX Airport" then set the Arrival time
        if(airlines[airline].routes[route].arrival.icao === 'KLAX' &&
          airlines[airline].routes[route].departure.icao === matchedAirports[matchedAirport].icao){
          const departureDetails = {
            airportName: airlines[airline].name,
            arrivalTime: airlines[airline].routes[route].arrival.time
          }
          departureDetailsList.push(departureDetails);
          matchedAirports[matchedAirport]["departureDetails"] = departureDetailsList;
        }
        return null;
      });
      return null;
    });
    return null;
  }).map(function() {
    return matchedAirports;
  });
}

export function fetchLocations(searchTerm){
  //if SearchTerm is null or empty return emptyData
  if(!searchTerm)
  {
    return{
      type: FETCH_LOCATIONS,
      payload: {"data" : ''}
    };
  }

  //Filter the matched airports based on the text entered in the textbox
  const matchedAirports = Object.keys(airports).filter(function(airport) {
    return checkMatchingAirport(airports[airport],searchTerm)
  }).map(function(airport) {
    return airports[airport];
  });

  //Sort the airports by city Name
  //sorting is done using .sort()
  matchedAirports.sort(function(airport, tempAirport){
    const airportCity = airport.city.toLowerCase();
    const tempAirportCity = tempAirport.city.toLowerCase();
    if (airportCity < tempAirportCity) //sort string ascending
    return -1;
    if (airportCity > tempAirportCity)
    return 1;
    return 0; //default return value (no sorting)
  });


  //get the Airlines only if the length is 1
  if(matchedAirports.length === 1)
  {
    getMatchingAirlines(matchedAirports);
  }

  return {
    type: FETCH_LOCATIONS,
    payload: {"data" : matchedAirports}
  };
}
