import React, { Component, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

export default class RouteComponentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h3>RouteComponentPage</h3>
                <button onClick={() => {
                    this.setState({count: count + 1})
                }}>
                    Click
                </button>
                <Router>
                    <Route render={() => <Child count={count}/>}/>
                </Router>
            </div>
        )
    }
}

class Child extends Component {
    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return <div>child- {this.props.count}</div>
    }
}

function FunctionChild(props) {
    useEffect(() => {
        return () => {
            console.log('WillUnmount')
        }
    }, [])

    return <div>child-{props.count}</div>
}