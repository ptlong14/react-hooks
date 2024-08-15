//45
import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increamentCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Count(use Class Comp) {count}</h1>
                <button onClick={this.increamentCount}>Increase CNT</button>
            </div>
        )
    }
}

export default ClassCounter
