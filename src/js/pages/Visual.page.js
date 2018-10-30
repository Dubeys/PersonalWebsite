import React, { Component } from "react";

import { Body } from "../partials/Body.partial";
import { VisualCategory } from "../components/VisualCategory.component";

import data from "../../assets/data/visual.json";
import { VisualFull } from "../components/VisualFull.component";


export class Visual extends Component {

    constructor() {

        super();

        this.title = "visuals";

        this.state = {
            selectedGroup: null,
            selectedVisual: null,
            selected: false
        };

        this.onVisualSelect = this.onVisualSelect.bind(this);
        this.onBackClick = this.onBackClick.bind(this);

    }

    onVisualSelect(visualKey,groupKey) {
        this.setState({
            selectedGroup: groupKey,
            selectedVisual: visualKey,
            selected: true
        });
    }

    onBackClick() {
        this.setState({
            selected: false
        })
    }

    render() {

        let child;

        if (this.state.selected){

            const category = data[this.state.selectedGroup];
            const visualData = category.list[this.state.selectedVisual];

            child = <VisualFull onBackClick={this.onBackClick} data={visualData} type={category.type} />

        }else {
            child = Visual.getCategories.call(this)
        }

        return (
            <Body className={"visuals" + (this.props.pageTransition ? " fade-out" : "")} title="Visuals" description="Coding, visuals and sound">
                {child}
            </Body>
        );

    }

    static getCategories() {

        return data.map( (category, key) =>
            <VisualCategory onClick={this.onVisualSelect} key={key} id={key} data={category} />
        )
    }

}