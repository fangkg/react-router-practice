import React, { Component } from "react";
import { RouterContext } from "./Context";

export default class Link extends Component {
    static contextType = RouterContext;
    handleClick = (event) => {
        // 禁掉默认事件
        event.preventDefault();
        // 命令行做跳转 拿不到props
        // history.pushState(this.props.to)
        this.context.history.push(this.props.to)
    }

    render() {
        const {to, children, ...restProps} = this.props;
        return <a href={to} {...restProps} onClick={this.handleClick}>{children}</a>;
    }
}