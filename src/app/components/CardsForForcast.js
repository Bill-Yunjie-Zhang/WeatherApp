import React from 'react'
import {Card} from 'react-bootstrap'


class Cards extends React.Component{
    render(){
        const item = this.props.item
        const dt_txt = item.dt_txt
        const main = item.main
        const humidity = main.humidity
        const pressure = main.pressure
        const temp = main.temp
        const temp_max = main.temp_max
        const temp_min = main.temp_min
        const weather = item.weather[0]
        const description = weather.description
        const wind = item.wind
        const windSpeed = wind.speed
        const windDeg = wind.deg
        return (
            <Card style={{ width: 260}}>
                <Card.Header style={{textAlign: "center", color: "red"}}>{dt_txt}</Card.Header>
                <Card.Body>
                    <Card.Title>Temperature: {temp}℃</Card.Title>
                    <Card.Text>maximum Temperature: {temp_max}℃</Card.Text>
                    <Card.Text>minimum Temperature: {temp_min}℃</Card.Text>

                    <hr/>
                    <Card.Title>Weather: {description}</Card.Title>
                    <Card.Text>humidity: {humidity}</Card.Text>
                    <Card.Text>pressure: {pressure}</Card.Text>
                    <hr/>

                    <Card.Title>Wind</Card.Title>
                    <Card.Text>wind speed: {windSpeed}</Card.Text>
                    <Card.Text>wind degree: {windDeg}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


export default Cards