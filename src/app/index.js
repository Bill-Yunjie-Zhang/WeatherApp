import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Menu } from 'semantic-ui-react'
import WeatherScreen from './screens/WeatherScreen';
import ForcastScreen from './screens/ForcastScreen'


class App extends React.Component{
    render(){
        return ( 
            <BrowserRouter>
                <Route path = "/weather" exact={true} component={WeatherScreen} />
                <Route path = "/forcast" exact={true} component={ForcastScreen} />
                <div style={{height: 100}}></div>
                <Navbar style={{backgroundColor: "#1c1c1c"}} variant="dark" expand="lg" fixed="bottom">
                    <Menu inverted>
                        <Menu.Item to="/weather" as={Link}><h4>Weather</h4></Menu.Item>
                        <Menu.Item to="/forcast" as={Link}><h4>Forcast</h4></Menu.Item>
                    </Menu>
                </Navbar> 
            </BrowserRouter>
        )
    }
}

export default App




// import React from 'react'
// import axios from 'axios'
// import BuildCard from './components/BuildCards'
// import { Menu, Segment, Container, Input, Card } from 'semantic-ui-react'

// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         items: [], 
//         city: '',
//         response: {}
//       };
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.handleDelete = this.handleDelete.bind(this);
//       this.handleRefresh = this.handleRefresh.bind(this);
//     }

//     getWeatherData(city, unit){
//         const thisComponent = this
//         axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&APPID=eda439d629165a345559e6e9043cf085&units=' + unit)
//         .then(function(res){
//             const data = res.data
//             var cityName = data.name

//             var main = data.main || {}
//             var temp = main.temp

//             var weatherData = data.weather || []
//             var weatherDataObject = weatherData[0] || {}
//             var description = weatherDataObject.description

//             var sysData = data.sys || {}
//             var country = sysData.country

//             var coordData = data.coord || {}
//             var lon = coordData.lon
//             var lat = coordData.lat
//             const newItem = {
//                 cityName: cityName,
//                 temp: temp,
//                 description: description,
//                 country: country,
//                 lon: lon,
//                 lat: lat,
//                 id: Date.now(),
//             };
//             thisComponent.setState(state => ({
//                 items: [newItem].concat(state.items),
//                 city: '',
//                 response: {}
//             }));
//         })
//         .catch(function(err){
//             console.log(err)
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Segment inverted>
//                     <form onSubmit={this.handleSubmit}>
//                         <Menu inverted secondary>
//                             <Menu.Item position="left">
//                                 <h1>Weather</h1>
//                             </Menu.Item>
//                             <Menu.Item>
//                                 <h1>Add cities!!!</h1>
//                             </Menu.Item>
//                             <Menu.Item position='right'>
//                                 <Input action='Add' id="new-city" placeholder='City...' onChange={this.handleChange} value={this.state.city}/>
//                             </Menu.Item>
//                         </Menu>
//                     </form>
//                 </Segment>
//                 <Container>
//                     <Card.Group>
//                         {this.state.items.map(item => (
//                             <BuildCard item={item} key={item.id} id={item.id} onDelete={this.handleDelete} onRefresh={this.handleRefresh}/>
//                         ))}  
//                     </Card.Group>
//                 </Container>
//             </div>
//       );
//     }
  
//     handleChange(ev) {
//         this.setState({ city: ev.target.value });
//     }
    
//     handleDelete(itemId){
//         const items = this.state.items.filter(function(item){
//             return item.id !== itemId
//         })
//         this.setState({items: items})
//     }

//     handleRefresh(itemId){
//         const refreshItem = this.state.items.find(function(item){
//             return item.id === itemId
//         })
//         const name = refreshItem.cityName
//         this.getWeatherData(name, 'metric')
//         this.handleDelete(itemId)
//     }

//     handleSubmit(ev) {
//         ev.preventDefault();
//         if (!this.state.city.length) {
//             return;
//         } else{
//             this.getWeatherData(this.state.city, 'metric')
//         }
//     }
// }

// export default App