import React, { useState } from "react";

class ClassComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		console.log("Hey I just mounted!");
	}

	componentDidUpdate() {
		console.log("Looks like we rerendered");
	}

	componentWillUnmount() {
		console.log("This is our cleanup function!");
	}

	incrementCount = () => {
		this.setState((state) => ({ count: state.count + 1 }));
	};

	render() {
		return (
			<>
				<div>
					<h1>React Class Component Example</h1>
					<p>{this.props.text}</p>
				</div>
				<div>
					<h1>Count</h1>
					<div>{this.state.count}</div>
					<button onClick={this.incrementCount}>Increment</button>
				</div>
			</>
		);
	}
}

export default ClassComponent;
