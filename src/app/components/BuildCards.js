import React from 'react'
import Cards from './Cards'

class BuildCard extends React.Component{
    constructor(props){
        super(props)
        this.state = { seconds: 0}
    }

    tick(){
        const seconds = this.state.seconds%60
        const minutes = (Math.floor(seconds/60))%60
        const hours = (Math.floor(minutes/60))%60
        if(hours >= 1){
            this.props.onRefresh(this.props.id)
        }else{
            this.setState(state => ({
                seconds: state.seconds + 1
            }))
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        var time = this.state.seconds
        var seconds = time%60
        var minutes = (Math.floor(time/60))%60
        return (
            <Cards item={this.props.item} key={this.props.id} id={this.props.id} seconds={seconds} minutes={minutes} onDelete={this.props.onDelete} onRefresh={this.props.onRefresh}/>
        )
    }
}

export default BuildCard



































// import React from 'react'
// import { Button, Card } from 'semantic-ui-react'

// class BuildCard extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = { seconds: 0}
//     }

//     tick(){
//         this.setState(state => ({
//             seconds: state.seconds + 1
//         }))
//     }

//     componentDidMount(){
//         this.interval = setInterval(() => this.tick(), 1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }

//     // autoRefresh(){
//     //     if(this.state.seconds>=30){
//     //         this.props.onRefresh(this.props.id)
//     //     }
//     // }

//     render(){
//         // console.log("this.props", this.props)
//         var item = this.props.item
//         var time = this.state.seconds
//         var seconds = time%60
//         var minutes = (Math.floor(time/60))%60
//         var hours = (Math.floor(minutes/60))%60
//         // this.autoRefresh()
//         // console.log("this.props.item", this.props.item)
//         if(seconds>=30){
//             this.props.onRefresh(this.props.id)
//         }
//         return (
//             <Card style={{margin: 30}} key={item.id}>
//                 <Card.Content>
//                     <h1>{item.cityName}</h1>
//                     <Card.Meta>last refresh:</Card.Meta>
//                     <Card.Meta> {hours} hours {minutes} minutes {seconds} seconds ago</Card.Meta>
//                     <Card.Header style={{marginTop: 15}}>temperature: {item.temp}℃</Card.Header>
//                     <Card.Header>weather: {item.description}</Card.Header>
//                     <Card.Description>a city in: {item.country}</Card.Description>
//                     <Card.Description>longitude: {item.lon} </Card.Description>
//                     <Card.Description>latitude: {item.lat}</Card.Description>
//                 </Card.Content>
//                 <Button.Group attached="bottom" size='large'>
//                     <Button color="green" onClick={() => this.props.onRefresh(this.props.id)}> Refresh</Button>
//                     <Button.Or />
//                     <Button onClick={() => this.props.onDelete(this.props.id)}>Delete</Button>
//                 </Button.Group>
//             </Card>
//         )
//     }
// }

// export default BuildCard