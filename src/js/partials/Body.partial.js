import React, { Component } from "react";

export class Body extends Component {

	constructor(){

		super();

	}

	render(){

		const hiddenTitle = this.props.title ? <h2 className="app__body__title">{this.props.title}</h2> : null;
		const hiddenDesc = this.props.description ? <h3 className="app__body__desc">{this.props.description}</h3> : null;

		return (
			<section className={"app__body " + this.props.className}>
				{hiddenTitle}
				{hiddenDesc}
				{this.props.children}
			</section>
		);

	}

}
