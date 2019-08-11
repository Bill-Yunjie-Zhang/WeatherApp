import React from "react"
import axios from 'axios'
import { Menu, Segment, Input, Container } from 'semantic-ui-react'

import BuildCards from '../components/BuildCardsForForcast'


class ForcastScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            city: '',
            response: {}
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    getWeatherData(city, unit){
        const thisComponent = this
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ city + '&APPID=eda439d629165a345559e6e9043cf085&units=' + unit)
        .then(function(res){
            const data = res.data
            const city = data.city || {}
            const name = city.name
            const newItem = {
                cityName: name,
                city: data,
                id: Date.now()
            }
            thisComponent.setState(state => ({
                items: [newItem].concat(state.items), 
                city: '',
                response: {}
            }));
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <Segment inverted>
                    <Container>
                        <form onSubmit={this.handleSubmit}>
                            <Menu inverted secondary>
                                <Menu.Item position="left">
                                    <h1>Weather</h1>
                                </Menu.Item>
                                <Menu.Item>
                                    <h1>Get forcasts!!!</h1>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Input action='Check' id="new-city" placeholder='City...' onChange={this.handleChange} value={this.state.city}/>
                                </Menu.Item>
                            </Menu>
                        </form>
                    </Container>
                </Segment>
                <Container>
                        {this.state.items.map(item => (
                            <BuildCards item={item} key={item.id} id={item.id} onDelete={this.handleDelete} onRefresh={this.handleRefresh}/>
                        ))}
                </Container>
            </div>
        )
    }

    handleChange(ev){
        this.setState({city: ev.target.value})
    }

    handleDelete(itemId){
        const items = this.state.items.filter(function(item){
            return item.id !== itemId
        })
        this.setState({items: items})
    }

    handleRefresh(itemId){
        const refreshItem = this.state.items.find(function(item){
            return item.id === itemId
        })
        const name = refreshItem.cityName
        this.getWeatherData(name, 'metric')
        this.handleDelete(itemId)
    }

    handleSubmit(ev){
        ev.preventDefault();
        if(!this.state.city.length){
            return
        } else{
            this.getWeatherData(this.state.city, 'metric')
        }
    }
}


export default ForcastScreen