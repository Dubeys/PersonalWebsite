import React, { Component } from "react";

import { Body } from "../partials/Body.partial";

export class Code extends Component {

    constructor() {

        super();

        this.title = "code";

        this.state = {
            listing: true,
            element: ''
        }

    }

    render() {

        return (
            <Body className={"code" + (this.props.pageTransition ? " fade-out" : "")}>
                <h1>this is the code page</h1>
                
            </Body>
        );

    }


}