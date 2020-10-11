import React, { Component } from "react";
import { RouterContext } from "./RouterContext";

// export default class Router extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         rerturn this.props.children;
//     }
// }


export default class Router extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: props.history.location
        }
        // location变换执行回调
        props.history.listen(location => {
            this.setState({location})
        })
    }

    render() {
        return <RouterContext.provider value={{
            history: this.props.history
        }}>
            { this.props.children }
        </RouterContext.provider>
    }
}