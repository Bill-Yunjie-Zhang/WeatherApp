import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Card, Menu, Segment, Container, Input, Button } from 'semantic-ui-react'
import HomeScreen from './screens/HomeScreen'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city : "",
            response : {},
        }
        this.handleCityInput = this.handleCityInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    buildCards(city){
        return <Card>
            <Card.Content>
                <h1>Welcome to {city}</h1>
            </Card.Content>
        </Card>
    }

    render(){
        const navButtonStyle = {
            fontSize: 20
        }
        var state = this.state
        var city = state.city
        // console.log(city)
        return (
            <BrowserRouter>
                <Segment inverted>
                    <form onSubmit = {this.handleSubmit}>
                        <Menu inverted secondary>
                            <Menu.Item>
                                <h1>Weather</h1>
                            </Menu.Item>
                            <Menu.Item style={navButtonStyle} to="/" as={Link} name='HomeScreen'/>
                            <Menu.Item position='right'>
                                <Input action='Add' placeholder='City...' value={city} onChange={this.handleCityInput} />
                            </Menu.Item>
                        </Menu>
                    </form>
                </Segment>

                <Container>
                    <Route path = "/" exact={true} component={HomeScreen} />
                </Container>
            </BrowserRouter>
        )
    }

    handleCityInput(ev){
        // console.log(ev.target.value)
        this.setState({
            city: ev.target.value
        })
    }

    handleSubmit(ev){
        ev.preventDefault();
        var city = this.state.city
        // console.log(this)
        // console.log(this.state)
        // console.log(city)
        buildCards(city)
    }
}

export default App