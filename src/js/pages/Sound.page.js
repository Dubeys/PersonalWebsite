import React, { Component } from "react";

import { Body } from "../partials/Body.partial";
import { PageLink } from "../components/PageLink.component";

export class Sound extends Component {

    constructor() {

        super();

        this.title = "sound";

    }

    render() {

        return (
            <Body>
                <h1>this is the sound page</h1>
                <PageLink onClick={this.props.onPageLinkClick} page="home">Home</PageLink>
            </Body>
        );

    }


}