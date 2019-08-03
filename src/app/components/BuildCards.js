import React from 'react'
import { Card } from 'semantic-ui-react'

class BuildCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("this.props", this.props)
        var items = this.props.items
        return <Card.Group>
            {items.map(item => (
                <Card key={item.id}>
                    <Card.Content>
                        <h1>Hello {item.cityName}</h1>
                        <Card.Header>temperature: {item.temp}℃</Card.Header>
                        <Card.Header>weather: {item.description}</Card.Header>
                        <Card.Description>a city in: {item.country}</Card.Description>
                        <Card.Description>longitude: {item.lon} </Card.Description>
                        <Card.Description>latitude: {item.lat}</Card.Description>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
    }
}

export default BuildCard