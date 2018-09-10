import React from 'react';
import Script from 'react-load-script'
import Router from 'next/router'
export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {buttonText: 'Play'};
		this.play = () => {
			Router.push('/game')
		}
	}
	handleScriptCreate() {
		this.setState({ scriptLoaded: false })
	}

	handleScriptError() {
		this.setState({ scriptError: true })
	}

	handleScriptLoad() {
		this.setState({ scriptLoaded: true })
	}
	mined() {
		console.log('mined')
	}
	// componentDidMount() {
	// 	const script = document.createElement("script");

	// 	script.src = "https://authedmine.com/lib/captcha.min.js";
	// 	script.async = true;

	// 	document.body.appendChild(script);
	// }
	render() {
		let button = <button id="enter" onClick={this.play}>{this.state.buttonText}</button>
		return (
			<div>
				<Script
					url="https://authedmine.com/lib/captcha.min.js"
					onCreate={this.handleScriptCreate.bind(this)}
					onError={this.handleScriptError.bind(this)}
					onLoad={this.handleScriptLoad.bind(this)}
				/>
			<div id="background">

				<div id="title_container">
					<h1>Reddit Guesser</h1>
					<p>
						Guess which subreddit each image, text post, or article is from!<br />
						Currently indexing <strong>60,871</strong> random subreddits!<br />
						<strong>May contain NSFW Content</strong><br />
						Over 18 Subreddits, and Subreddits with under 100 subscribers NOT included.
					</p>
						<div className="coinhive-captcha"
							data-hashes="1024"
							data-key="1Qhl0m0kKwWrfowA3n0i2dt3G7c3yEZq"
							data-callback="mined"
							data-disable-elements="#enter">
							<em>Loading Captcha...<br/>
								If it doesn't load, please disable Adblock!
							</em>
						</div>
						
					{button}
					
				</div>
				
				</div>	
				<style global jsx>{`
					#background{
						position: absolute;
						z-index: 1;
						width: 100%;
						height: 100%;
						background-color: rgb(50,50,50);
						font-family: 'Roboto';
					}
					#title_container{
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						display: inline-block;
						color: white;
						border: dashed white 2px;
						text-align: center;
						padding: 10px;
						border-radius: 1px;
						margin:0;
					}
					#title_container p{
						border:solid white 1px;
						padding:5px;
						line-height: 25px;
					}
					#enter{
						background-color: rgb(48, 151, 72);
						width: auto;
						position: relative;
						font-size: 3rem;
						padding-top:5px;
						padding-bottom: 5px;
						border: none;
						outline:none;
						border-radius: 3px;
						transition: all ease 0.3s;
					}
					#enter:hover{
						cursor: pointer;   
						background-color: rgb(71, 216, 105); 
					}
					#enter:disabled {
						cursor: default;
						background-color: rgb(48, 90, 72);
						color:white;

					}
    		`}</style>
				</div>
			
		);
	}
}
