import React, {Component} from "react";

import { Body } from "../partials/Body.partial";
import { Link } from "../components/Link.component";
import { LinkBox } from "../components/LinkBox.component";

import codeImg from '../../assets/images/code.png';
import visualsImg from '../../assets/images/visuals.png';
import soundImg from '../../assets/images/sound.png';

export class Home extends Component {
    
    constructor(){

        super();

    }

    render() {

        return (
            <Body className={"home" + (this.props.pageTransition ? " fade-out" : "" ) } title="Home" description="Coding, visuals and sound">

                <nav className="home__nav">

                    <a href="https://github.com/Dubeys" target="_blank" className="link-box">
                        <LinkBox vertical="true" image={codeImg}>code</LinkBox>
                    </a>
                    <Link onClick={this.props.onPageLinkClick} linkID="visuals" className="link-box">
                        <LinkBox vertical="true" image={visualsImg}>visuals</LinkBox>
                    </Link>
                    <a href="https://soundcloud.com/dubeystep/tracks" target="_blank" className="link-box">
                        <LinkBox vertical="true" image={soundImg}>sound</LinkBox>
                    </a>

                </nav>

            </Body>
        );

    }


}

//  <Link onClick={this.props.onPageLinkClick} linkID="code" className="link-box">
    // <LinkBox vertical="true" image={codeImg}>code</LinkBox>
// </Link>

// <Link onClick={this.props.onPageLinkClick} linkID="sound" className="link-box">
    // <LinkBox vertical="true" image={soundImg}>sound</LinkBox>
// </Link>