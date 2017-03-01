import React from 'react';

class Greetings extends React.Component{
	componentDidMount() {
		this.props.onMount();
	}

	render() {
		return (
			<div className="jumbotron">
				<h1>{this.props.text}</h1>
			</div>

		);
	}
}

Greetings.propTypes = {
	text: React.PropTypes.string,
	isReady: React.PropTypes.bool,
	onMount: React.PropTypes.func
};

export default Greetings;