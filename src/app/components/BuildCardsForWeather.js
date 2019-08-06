import React from 'react'
import Cards from './CardsForWeather'


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