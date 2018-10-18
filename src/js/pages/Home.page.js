import React, {Component} from "react";

import { Body } from "../partials/Body.partial";
import { PageLink } from "../components/PageLink.component";
import { LinkBox } from "../components/LinkBox.component";

export class Home extends Component {
    
    constructor(){

        super();

    }

    render() {

        return (
            <Body class={"home" + (this.props.pageTransition ? " fade-out" : "" ) }>

                <h1>igor</h1>

                <nav className="home__nav">

                    <PageLink onClick={this.props.onPageLinkClick} page="code" className="link-box">
                        <LinkBox vertical="true">Code</LinkBox>
                    </PageLink>
                    <PageLink onClick={this.props.onPageLinkClick} page="visuals" className="link-box">
                        <LinkBox vertical="true">Visuals</LinkBox>
                    </PageLink>
                    <PageLink onClick={this.props.onPageLinkClick} page="sound" className="link-box">
                        <LinkBox vertical="true">Sound</LinkBox>
                    </PageLink>

                </nav>

            </Body>
        );

    }


}