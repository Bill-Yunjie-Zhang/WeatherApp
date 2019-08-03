import React from 'react'
import { Button, Card, Grid } from 'semantic-ui-react'

class BuildCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: this.props.value
        }
    }
    render(){
        // console.log("this.props", this.props)
        var items = this.props.items
        return <Card.Group>
            {items.map(item => (
                // <Grid.Column>
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
                            <Button>Delete</Button>
                        </Button.Group>
                    </Card>
                //</Grid.Column> 
            ))}
        </Card.Group>
    }
}

export default BuildCard