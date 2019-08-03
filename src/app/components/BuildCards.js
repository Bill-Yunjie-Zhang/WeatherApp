import React from 'react'
import { Button, Card } from 'semantic-ui-react'

class BuildCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log("this.props", this.props)
        var item = this.props.item
        // console.log("this.props.item", this.props.item)
        return (
            <Card style={{margin: 30}} key={item.id}>
                <Card.Content>
                    <h1>{item.cityName}</h1>
                    <Card.Header>temperature: {item.temp}℃</Card.Header>
                    <Card.Header>weather: {item.description}</Card.Header>
                    <Card.Description>a city in: {item.country}</Card.Description>
                    <Card.Description>longitude: {item.lon} </Card.Description>
                    <Card.Description>latitude: {item.lat}</Card.Description>
                </Card.Content>
                <Button.Group attached="bottom" size='large'>
                    <Button color="green"> Refresh</Button>
                    <Button.Or />
                    <Button onClick={() => this.props.onDelete(this.props.id)}>Delete</Button>
                </Button.Group>
            </Card>
        )
    }
}

export default BuildCard