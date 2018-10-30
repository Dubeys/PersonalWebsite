import React, { Component } from "react";
import { VisualElement } from "./VisualElement.component";

export class VisualCategory extends Component {

    constructor() {

        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        this.props.onClick(data,this.props.id);
    }

    render() {

        const name = this.props.data.category;
        const visuals = VisualCategory.getVisuals.call(this);

        return (
            <section className={"visuals__category"}>
                <h1>{name}</h1>
                <div className={"visuals__category__list"}>
                    {visuals}
                </div>
            </section>
        );

    }

    static getVisuals() {

        const type = this.props.data.type;
        const data = this.props.data.list;

        return data.map( (visual,key) =>
            <VisualElement key={key} id={key} onClick={this.handleClick} data={visual} type={type} />
        )
    }


}