import React from 'react';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { exclamationCount: 0, buttonText: 'Play'};
		this.handleClick = () => {
			logger.info(`Getting more excited! previously ${this.state.exclamationCount} excitements.`);
			this.setState({exclamationCount: this.state.exclamationCount + 1});
		};
		this.play = () => {
			this.setState({ buttonText: 'Loading' })
			window.location = '/game';
		}
	}

	render() {
		return (

			<div id="background">
				<div id="title_container">
					<h1>Reddit Guesser</h1>
					<p>Guess which subreddit each image is from!</p>
					<div id="enter" onClick={this.play}>{this.state.buttonText}</div>
				</div>
				
			</div>	

			
		);
	}
}
