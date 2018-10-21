import React, { Component } from "react";

export class LinkBox extends Component {

    constructor() {

        super();

    }

    createBackgroundImage(){

        const alt = this.props.alt ? this.props.alt : "";

        if (this.props.image) {
            return <img className="link-box__bg" src={this.props.image} alt={alt} />
        }

        return null;

    }

    render() {

        const isVertical = this.props.vertical ? " link-box--wrapper-v" : "";
        const image = this.createBackgroundImage();
        const hasImage = !image ? " link-box--no-image" : "";

        return (
            <div className={ "link-box--wrapper" + isVertical + hasImage}>
                <div className="link-box__bg--wrapper">
                    {image}
                </div>
                <p className="link-box__title">
                    {this.props.children}
                </p>
            </div>
        );

    }


}