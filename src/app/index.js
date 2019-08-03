import React from 'react'
import axios from 'axios'
import BuildCard from './components/BuildCards'
import { Menu, Segment, Container, Input } from 'semantic-ui-react'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [], 
        city: '',
        response: {}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    getWeatherData(city, unit){
        const thisComponent = this
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&APPID=eda439d629165a345559e6e9043cf085&units=' + unit)
        .then(function(res){
            const data = res.data
            var cityName = data.name

            var main = data.main || {}
            var temp = main.temp

            var weatherData = data.weather || []
            var weatherDataObject = weatherData[0] || {}
            var description = weatherDataObject.description

            var sysData = data.sys || {}
            var country = sysData.country

            var coordData = data.coord || {}
            var lon = coordData.lon
            var lat = coordData.lat
            const newItem = {
                city: thisComponent.state.city,
                cityName: cityName,
                temp: temp,
                description: description,
                country: country,
                lon: lon,
                lat: lat,
                id: Date.now(),
            };
            thisComponent.setState(state => ({
                items: state.items.concat(newItem),
                city: '',
                response: {}
            }));
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Segment inverted>
                    <form onSubmit={this.handleSubmit}>
                        <Menu inverted secondary>
                            <Menu.Item position="left">
                                <h1>Weather</h1>
                            </Menu.Item>
                            <Menu.Item>
                                <h1>Add cities!!!</h1>
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Input action='Add' id="new-city" placeholder='City...' onChange={this.handleChange} value={this.state.city}/>
                            </Menu.Item>
                        </Menu>
                    </form>
                </Segment>
                <Container>
                    <BuildCard items={this.state.items} />
                </Container>
            </div>
      );
    }
  
    handleChange(e) {
        this.setState({ city: e.target.value });
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const that = this 
        if (!this.state.city.length) {
            return;
        } else{
            this.getWeatherData(this.state.city, 'metric')
        }
    }

}

export default App