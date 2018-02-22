import React from 'react';
import { logging } from 'react-server';
import gameHandler from '../api/gameHandler';


const logger = logging.getLogger(__LOGGER__);


export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.handler = new gameHandler(10)
		this.handler.getList(this)
		this.select = (name) => {
			this.handler.select(name,this);
		}
	}
	
	render() {
		return (
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
			</div>
		);
	}
}
