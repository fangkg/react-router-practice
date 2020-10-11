import React, { Component } from "react";
import matchPath from "./matchPath";
import RouterContext from "Context.js";

export default class Route extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {
                    context => {
                        const location = context.location;
                        const { children, componnet, render, path } = this.props;
                        // const match = location.pathname === path;
                        const match = matchPath(location.pathname, this.props)
                        return match ? React.createElement(component) : null;
                    }
                }
            </RouterContext.Consumer>
        )
        // const { children, component, render, path } = this.props
        // const match = window.location.pathname === path;
        // return match ? React.createElement(component) : null;
    }
}