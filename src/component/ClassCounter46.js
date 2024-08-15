import React, { Component } from 'react'

class ClassCounter46 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    reCount = () => {
        this.setState({ count: 0 })
    };
    inCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    deCount = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }
    inCountFive = () => {
        for (let i = 0; i < 5; i++) {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }
    }
    render() {
        return (
            <div>
                <h1>Count(class with prevState) {this.state.count}</h1>
                <button onClick={this.reCount}>Reset</button>
                <button onClick={this.inCount}>Increase</button>
                <button onClick={this.deCount}>Decrease</button>
                <button onClick={this.inCountFive}>Increase 5</button>
            </div>
        )
    }
}



export default ClassCounter46
