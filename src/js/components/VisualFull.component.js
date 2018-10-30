import React, { Component } from "react";

export class VisualFull extends Component {

    constructor() {

        super();

    }

    createContent() {
        const data = this.props.data

        let child;

        switch (this.props.type) {
            case "image":
                    child = VisualFull.createImage(data,this.props.onBackClick);
                break;
        }

        return (
            <div className={"visual-full"} >
                {child}
            </div>
        )
    }

    render() {

        return this.createContent();

    }

    static createImage(data, onBackClick) {
        const title = data.title && <h1>{data.title}</h1>;
        const client = data.client && <h2>{data.client}</h2>;
        const description = data.description && <p className="visual-full__description">{data.description}</p>;

        let image;

        const directory = data.dir ? data.dir : "other";

        try {
            const imageUrl = require("../../assets/images/visuals/" + directory + "/" + data.filename);
            image = <img src={imageUrl} alt={data.title + " image"} />;
        } catch (err) { }

        const imageSection = image && <div key="image" className="visual-full__image">{image}</div>;
        const contentSection = (
            <div key="content" className="visual-full__content">
                {/* <a onClick={onBackClick} className="visual-full__back">gallery</a> */}
                <div className="visual-full__title">
                    {title}
                    {client}
                </div>
                {/* {description} */}
            </div>
        )

        return [
            imageSection, contentSection
        ]
    }


}