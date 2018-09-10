import React from 'react';
import gameHandler from '../api/gameHandler';

export default class extends React.Component {
	constructor(props) {
		super(props);


		this.handler = new gameHandler(10, 5, this)
		this.handler.getList(this, true)

		this.select = (name) => {
			this.handler.select(name, this);
		}
	}
	componentDidMount() {
		//window.addEventListener('load', this.handleLoad);
	}

	render() {
		return (
			<div>

				<div>
					<div id="image">
						<img id="imageEmbed" src={this.state.imageURL} alt={this.state.displayText}></img>
					</div>
					<div id="possible_subreddits">
						{this.state.subreddits.map((subreddit) =>
							<div key={subreddit.name} className="subreddit" onClick={() => this.select(subreddit.name)}>
								{subreddit.name}
							</div>
						)}
					</div>
					<div id="status">Total Score: {this.state.points}
						{' '}| Current Score: {this.state.pointsTemp}
						{' '}| Round {this.handler.roundsDone}/{this.handler.rounds}
					</div>
				</div>

				<style jsx>{`
					#image{
						position: absolute;
						width: 50%;
						height: 100%;
						background-color: rgb(40,40,40);
						float:left;
					}
					#possible_subreddits{
						position: absolute;
						width: 50%;
						height: 100%;
						left: 50%;
						background-color: rgb(60,60,60);
						float: left;
						overflow-y: scroll;
					}
					.subreddit{
						color: white;
						background-color: rgb(63, 189, 63);
						border-bottom: solid rgb(60,60,60) 2px;
						padding: 10px;
					}
					.subreddit:hover{
						background-color: rgb(54, 221, 54);
						cursor: pointer;
					}
				#image{
						color: white;
						font-size:2rem; 
						overflow-y: scroll;

				}
				#imageEmbed{
						max-width: 100%;
				}
				#status{
						position: absolute;
						z-index: 20;
						width: 50%;
						left:50%;
						transform: translateX(-50%);
						background-color: rgba(3, 83, 0, 0.685);
						color:white;
						bottom: 0;
						padding:10px;
				}
				`}</style>
			</div>
		);
	}
}
