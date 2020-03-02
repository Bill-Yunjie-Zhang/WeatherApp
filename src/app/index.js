import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Menu, Container } from 'semantic-ui-react'

import WeatherScreen from './screens/WeatherScreen'
import ForcastScreen from './screens/ForcastScreen'
import HomeScreen from './screens/HomeScreen'


class App extends React.Component{
    render(){
        return <div>
            <BrowserRouter>
                <Route path = "/WeatherApp" exact={true} component={HomeScreen} />
                <Route path = "/WeatherApp/weather" exact={true} component={WeatherScreen} />
                <Route path = "/WeatherApp/forcast" exact={true} component={ForcastScreen} />
                <div style={{height: 100}}></div>
                <Navbar style={{backgroundColor: "#1c1c1c"}} variant="dark" expand="lg" fixed="bottom">
                <Container>
                    <Menu inverted>
                        <Menu.Item to="/WeatherApp" as={Link}><h4>Home</h4></Menu.Item>
                        <Menu.Item to="/WeatherApp/weather" as={Link}><h4>Weather</h4></Menu.Item>
                        <Menu.Item to="/WeatherApp/forcast" as={Link}><h4>Forcast</h4></Menu.Item>
                    </Menu>
                    </Container>
                </Navbar> 
            </BrowserRouter>
        </div>
    }
}


export default App