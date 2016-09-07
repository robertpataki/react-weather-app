var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var _this = this;

    this.setState({
      isLoading: true
    });
    
    openWeatherMap.getTemp(location).then(function(temp) {
      _this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err) {
      _this.setState({
        isLoading: false
      });
      alert(err);
    });
  },

  render: function(){
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h2>Fetching weather...</h2>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;