import React from 'react'
import { Container,Jumbotron} from 'react-bootstrap'


class HomeScreen extends React.Component{
    render(){
        const style = { 
            marginTop: 50,
            backgroundColor: "#1a1a1a", 
            color: "#ffffff",
            borderRadius: 30,
            textAlign: "center"
        }
        return <Container>
            <Jumbotron style={style}>
                <h1 style={{fontSize:45}}>Hello, world!</h1>
                <hr style={{backgroundColor: "#ffffff", margin: 10}}/>
                <h2>
                    <strong>Weather</strong>: <br/>
                    This allows you to add the current weather info of any city. 
                    The system will automatically refresh every hour. 
                    But if you want to check the accurate info of the moment when checking, click the "refresh" button. 
                    Click the "delete" button to delete any unwanted weather info.
                </h2>
                <hr style={{backgroundColor: "#ffffff", margin: 10}}/>
                <h2>
                    <strong>Forcast</strong>: <br/>
                    This allows you to add a five day forecast info by the interval three hours.
                    By the beginning of the each forcast, the system will also automatically present you with some basic info on the city you are searching.
                    Click the "delete" button to delete any unwanted group of predications.
                </h2>
            </Jumbotron>
        </Container>
    }
}


export default HomeScreen