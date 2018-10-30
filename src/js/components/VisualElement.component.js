import React, { Component } from "react";

export class VisualElement extends Component {

    constructor() {

        super();

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.onClick(this.props.id);
    }

    render() {

        const type = this.props.type;

        const imageUrl = VisualElement.getImageUrl(this.props.data.dir,this.props.data.filename);

        const image = <img className="visual__image" src={imageUrl} alt={this.props.data.title + " image"} />;

        return (
            <div onClick={this.handleClick} className={"visual"} >
                {image}
            </div>
        );

    }

    static getImageUrl(dir,name) {
        let image;

        const directory = dir ? dir : "other";

        try {
            image = require("../../assets/images/visuals/" + directory + "/" + name);
        } catch (err) { }

        return image;
    }


}