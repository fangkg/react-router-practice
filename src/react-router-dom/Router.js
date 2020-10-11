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
    static computeRootMatch(pathname) {
        return { path: "/", url: "/", params: {}, isExact: pathname === "/"};
    }
    constructor(props) {
        super(props);
        this.state = {
            location: props.history.location
        }
        // location变换执行回调
        this.unlisten = props.history.listen(location => {
            this.setState({location})
        })
    }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
        }
    }

    render() {
        return <RouterContext.provider value={{
            history: this.props.history,
            location: this.state.location,
            match: Router.computeRootMatch(this.state.location.pathname),
            staticContext: this.props.staticContext
        }}>
            { this.props.children }
        </RouterContext.provider>
    }
}