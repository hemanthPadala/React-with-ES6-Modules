import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Where Do You Want To Go?</h1>
          <input className="location-search" placeholder="City or airport code" value="Sydn"/>
          <nav>
              <div className="nav-button selected">Outbound</div>
              <div className="nav-button">Inbound</div>
          </nav>
        </header>
        <main>
            <div className="destination">
                <h2 className="location">Sydney, Australia</h2>
                <div className="routes">
                    <div className="route">
                        <span className="route-detail airline">Atlantic International Airlines</span>
                        <span className="route-detail time">6:57 AM</span>
                    </div>
                    <div className="route">
                        <span className="route-detail airline">Oceanic Airlines</span>
                        <span className="route-detail time">2:55 PM</span>
                    </div>
                </div>

                <iframe className="destination-map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=-33.9460983,151.177002&z=3&hl=en&output=embed"></iframe>
                <p className="airport"><span className="name">Sydney Kingsford Smith International Airport</span> <span className="iata">(SYD)</span></p>
            </div>
        </main>
      </div>
    );
  }
}

export default App;
