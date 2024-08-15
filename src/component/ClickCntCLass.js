//50 useEffect after render
//51 condition run useEffect
import React, { Component } from 'react'

class ClickCntCLass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        document.title = `Click ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `Click ${this.state.count} times`
            console.log("Update title")
        }

    }
    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}>
                </input>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times (Class Comp)
                </button>
            </div>
        )
    }
}

export default ClickCntCLass
