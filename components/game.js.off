import React from 'react';
import { logging } from 'react-server';
import gameHandler from '../api/gameHandler';
import Preload from 'react-preload'


const loadingIndicator = (<div>Loading</div>)




const logger = logging.getLogger(__LOGGER__);


export default class Game extends React.Component {
	constructor(props) {
		super(props);

	
		this.handler = new gameHandler(10,5,this)
		this.handler.getList(this,true)
		
		this.select = (name) => {
			this.handler.select(name,this);
		}
	}
	componentDidMount() {
		//window.addEventListener('load', this.handleLoad);
	}
	
	render() {
		return (
			<Preload
				loadingIndicator={loadingIndicator}
				autoResolveDelay={3000}
				onError={(error) => logger.error(error)}
				onSuccess={(message)=>logger.info(message)}
				resolveOnError={true}
				mountChildren={true}>
				{
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
				}
					
			
			</Preload>	
		);
	}
}
