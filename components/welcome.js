import React from 'react';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);
const site_key = '1Qhl0m0kKwWrfowA3n0i2dt3G7c3yEZq'
const captcha = (
	<div className="coinhive-captcha" data-hashes="512" data-key='' >
		<em>
			Loading Captcha...<br/>
				If it doesn't load, please disable Adblock!
		</em>
	</div>
)

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {buttonText: 'Play'};
		this.play = () => {
			this.setState({ buttonText: 'Loading' })
			this.clickedPlay = true;
		}
	}
	componentDidMount() {
		const script = document.createElement("script");

		script.src = "https://authedmine.com/lib/captcha.min.js";
		script.async = true;

		document.body.appendChild(script);
	}
	render() {
		let button = <div id="enter" onClick={this.play}>{this.state.buttonText}</div>
		if (this.clickedPlay) {
			button = captcha;
		}
		return (
			<div id="background">

				<div id="title_container">
					<h1>Reddit Guesser</h1>
					<p>
						Guess which subreddit each image, text post, or article is from!<br />
						Currently indexing <strong>60,871</strong> random subreddits!<br />
						<strong>May contain NSFW Content</strong><br />
						Over 18 Subreddits, and Subreddits with under 100 subscribers NOT included.
					</p>
					{button}
					
				</div>
				
			</div>	
		);
	}
}
