import React from 'react'
import {Card} from 'semantic-ui-react'
import Cards from '../components/CardsForForcast'
import BuildTheTop from '../components/BuildTheTop'


class BuildCards extends React.Component{
    render(){
        const item = this.props.item
        const city = item.city
        const info = city.city
        const name = info.name
        const country = info.country
        const population = info.population
        const coord = info.coord
        const lat = coord.lat
        const lon = coord.lon
        return <div>
            <BuildTheTop onDelete={this.props.onDelete} onRefresh={this.props.onRefresh} country={country} name={name} population={population} lat={lat} lon={lon} key={this.props.id} id={this.props.id}/>
            <Card.Group>
                {city.list.map(item => (
                    <Cards item={item}/>
                ))}
            </Card.Group>
        </div>
    }
}


export default BuildCards