import React, { Component } from "react";

export class Body extends Component {

	constructor(){

		super();

	}

	render(){

		return (
			<section id="body" className={this.props.class}>
				{this.props.children}
			</section>
		);

	}

}
