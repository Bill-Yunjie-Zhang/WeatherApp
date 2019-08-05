import React from 'react'
import { Button, Card } from 'semantic-ui-react'


class Cards extends React.Component{
    render(){
        // console.log(this.props.onDelete)
        var item = this.props.item
        var seconds = this.props.seconds
        var minutes = this.props.minutes
        var hours = this.props.hours
        var onDelete = this.props.onDelete
        var onRefresh = this.props.onRefresh
        return (
            <Card style={{margin: 30}} key={item.id}>
                <Card.Content>
                    <h1 style={{textAlign: "center"}}>{item.cityName}</h1>
                    <hr/>
                    <Card.Meta>last refresh: {minutes} minutes {seconds} seconds ago</Card.Meta>
                    <Card.Header style={{marginTop: 15}}>Temperature: {item.temp}℃</Card.Header>
                    <Card.Header>Weather: {item.description}</Card.Header>
                    <Card.Description>a city in: {item.country}</Card.Description>
                    <Card.Description>longitude: {item.lon} </Card.Description>
                    <Card.Description>latitude: {item.lat}</Card.Description>
                </Card.Content>
                <Button.Group attached="bottom" size='large'>
                    <Button color="green" onClick={() => onRefresh(this.props.id)}> Refresh</Button>
                    <Button.Or />
                    <Button onClick={() => onDelete(this.props.id)}>Delete</Button>
                </Button.Group>
            </Card>
        )
    }
}

export default Cards