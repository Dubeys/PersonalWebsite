import React, { Component } from "react";

import { Body } from "../partials/Body.partial";
import { PageLink } from "../components/PageLink.component";

export class Visual extends Component {

    constructor() {

        super();

        this.title = "visuals";

    }

    render() {

        return (
            <Body>
                <h1>this is the visuals page</h1>
                <PageLink onClick={this.props.onPageLinkClick} page="home">Home</PageLink>
            </Body>
        );

    }


}