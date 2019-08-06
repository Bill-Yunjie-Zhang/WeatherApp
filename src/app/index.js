import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Menu } from 'semantic-ui-react'

import WeatherScreen from './screens/WeatherScreen'
import ForcastScreen from './screens/ForcastScreen'
import HomeScreen from './screens/HomeScreen'


class App extends React.Component{
    render(){
        return <div>
            <BrowserRouter>
                <Route path = "/home" exact={true} component={HomeScreen} />
                <Route path = "/weather" exact={true} component={WeatherScreen} />
                <Route path = "/forcast" exact={true} component={ForcastScreen} />
                <div style={{height: 100}}></div>
                <Navbar style={{backgroundColor: "#1c1c1c"}} variant="dark" expand="lg" fixed="bottom">
                    <Menu inverted>
                        <Menu.Item to="/home" as={Link}><h4>Home</h4></Menu.Item>
                        <Menu.Item to="/weather" as={Link}><h4>Weather</h4></Menu.Item>
                        <Menu.Item to="/forcast" as={Link}><h4>Forcast</h4></Menu.Item>
                    </Menu>
                </Navbar> 
            </BrowserRouter>
        </div>
    }
}


export default App