import React, { Component } from "react";

export class PageLink extends Component {

    constructor() {

        super();

        this.handlePageClick = this.handlePageClick.bind(this);

    }

    handlePageClick()  {
        this.props.onClick(this.props.page,.5);
    }

    render() {

        return (
            <a onClick={this.handlePageClick} className={this.props.className}>
                {this.props.children}
            </a>
        );

    }


}