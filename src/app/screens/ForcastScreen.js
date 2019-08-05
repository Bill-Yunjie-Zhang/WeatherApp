import React from "react"
import { Menu, Segment, Input, Card } from 'semantic-ui-react'

class ForcastScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            city: '',
            response: {}
        };
    }
    render(){
        return (
            <Segment inverted>
                    <form onSubmit={this.handleSubmit}>
                        <Menu inverted secondary>
                            <Menu.Item position="left">
                                <h1>Weather</h1>
                            </Menu.Item>
                            <Menu.Item>
                                <h1>Get forcasts!!!</h1>
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Input action='Add' id="new-city" placeholder='City...' value={this.state.city}/>
                            </Menu.Item>
                        </Menu>
                    </form>
                </Segment>
        )
    }
}

export default ForcastScreen