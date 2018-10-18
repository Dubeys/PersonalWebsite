import React, { Component } from "react";

import { Body } from "../partials/Body.partial";
import { PageLink } from "../components/PageLink.component";

export class Code extends Component {

    constructor() {

        super();

        this.title = "code";

    }

    render() {

        return (
            <Body>
                <h1>this is the code page</h1>
                <PageLink onClick={this.props.onPageLinkClick} page="home">Home</PageLink>
            </Body>
        );

    }


}