import React from 'react'
import {Card} from 'react-bootstrap'
import {Button} from 'semantic-ui-react'


class BuildTheTop extends React.Component{
    render(){
        return <Card style={{marginTop: 30, marginBottom: 30, border: "2px solid white"}} className="text-center" bg="dark" text="white" >
            <Card.Header as="h1">{this.props.name}</Card.Header>
            <Card.Body>
                <Card.Title>{this.props.country}</Card.Title>
                <Card.Text>{this.props.name} is a city with a population of {this.props.population}!</Card.Text>
                <Button.Group>
                    <Button color="green" onClick={() => this.props.onRefresh(this.props.id)}> Refresh</Button>
                        <Button.Or />
                    <Button onClick={() => this.props.onDelete(this.props.id)}>Delete</Button>
                </Button.Group>
                </Card.Body>
            <Card.Footer className="text-muted">lat: {this.props.lat} lon: {this.props.lon}</Card.Footer>
        </Card>
    }
}


export default BuildTheTop