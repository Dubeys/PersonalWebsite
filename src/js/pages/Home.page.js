import React, {Component} from "react";

import { Body } from "../partials/Body.partial";
import { PageLink } from "../components/PageLink.component";
import { LinkBox } from "../components/LinkBox.component";

import codeImg from '../../assets/images/code.png';
import visualsImg from '../../assets/images/visuals.jpg';
import soundImg from '../../assets/images/sound.png';

export class Home extends Component {
    
    constructor(){

        super();

    }

    render() {

        return (
            <Body className={"home" + (this.props.pageTransition ? " fade-out" : "" ) } title="Home" description="Coding, visuals and sound">

                <nav className="home__nav">

                    <PageLink onClick={this.props.onPageLinkClick} page="code" className="link-box">
                        <LinkBox vertical="true" image={codeImg}>Coding</LinkBox>
                    </PageLink>
                    <PageLink onClick={this.props.onPageLinkClick} page="visuals" className="link-box">
                        <LinkBox vertical="true" image={visualsImg}>Visuals</LinkBox>
                    </PageLink>
                    <PageLink onClick={this.props.onPageLinkClick} page="sound" className="link-box">
                        <LinkBox vertical="true" image={soundImg}>Sound</LinkBox>
                    </PageLink>

                </nav>

            </Body>
        );

    }


}