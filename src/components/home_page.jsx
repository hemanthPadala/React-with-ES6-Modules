import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocations } from '../actions';
import _ from 'lodash';
import SearchResults from './search_results';
import PropTypes from 'prop-types';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      searchTerm: '' ,
      componentNav: 'outbound'
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeNavComponent = this.changeNavComponent.bind(this);
  }

  handleChange(event){
    this.setState({searchTerm : event.target.value});
    this.props.fetchLocations(event.target.value);
  }

  changeNavComponent(){
    if(this.state.componentNav === 'outbound'){
      this.setState({componentNav :'inbound'});
      //  this.setState={componentNav === 'inbound'};
    } else if (this.state.componentNav === 'inbound') {
      this.setState({componentNav : 'outbound'});
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Where Do You Want To Go?</h1>
          <form>
            <input
              className="location-search"
              placeholder="City or airport code"
              value={this.state.searchTerm}
              onChange={this.handleChange}
              />
            <nav>
              <div onClick={this.changeNavComponent} className={this.state.componentNav === 'outbound' ? 'nav-button selected' : 'nav-button'}>Outbound</div>
              <div onClick={this.changeNavComponent} className={this.state.componentNav  === 'inbound'? 'nav-button selected' : 'nav-button'}>Inbound</div>
            </nav>
          </form>
        </header>
        <main>
          <SearchResults componentSelected={this.state.componentNav}/>
        </main>

      </div>
    );
  }
}


function mapStateToProps(state){
  return { locations: state.locations };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchLocations },dispatch);
}

HomePage.propTypes = {
  locations: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
