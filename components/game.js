import React from 'react';
import { logging } from 'react-server';
import axios from 'axios';
import subreddits_json from './parsed_subreddits.json'

const logger = logging.getLogger(__LOGGER__);
const num_to_gen_val = 10;

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		let subreddits_arr = subreddits_json.subreddits
		let listed = this.generate_list(num_to_gen_val, subreddits_arr)
		let index = Math.floor(Math.random() * Math.floor(num_to_gen_val-1));
		let selected = encodeURI(listed[index].URL);
		this.state = { subreddits: listed, imageURL: 'None', displayText: 'Starting', correct: selected, correctIndex: index };
		axios.get(`/fetch?url=${selected}`)
			.then((response) =>{
				let source = response.data
				if (source.type == 'article') {
					this.setState({displayText:source.content})
				}
				if (source.type == 'image') {
					this.setState({ imageURL: source.content })
				}
				if (source.type == 'self') {
					this.setState({ displayText: source.content })
				}
				
				console.log(source);
			})
			.catch(function (error) {
				console.log(error);
			});
		
		this.select = (name) => {
			logger.info(`Selected ${name} correct was ${this.state.correct}`);
			console.log(this.state.correct)
			if (this.state.correct.includes(name)) {
				let listed = this.generate_list(num_to_gen_val, subreddits_arr)
				this.setState({ subreddits: listed, imageURL: 'None'})
				let index = Math.floor(Math.random() * Math.floor(num_to_gen_val-1));
				let selected = encodeURI(listed[index].URL);
				this.setState({ correct: selected ,correctIndex:index});
				axios.get(`/fetch?url=${selected}`)
					.then((response) => {
						let source = response.data
						if (source.type == 'article') {
							this.setState({ displayText: source.content })
						}
						if (source.type == 'image') {
							this.setState({ imageURL: source.content })
						}
						if (source.type == 'self') {
							this.setState({ displayText: source.content })
						}

						//console.log(source);
					})
					.catch(function (error) {
						console.log(error);
					});

			}
			else {
				let names = this.state.subreddits.map((subreddit) => subreddit.name)
				let remove = names.indexOf(name)
				console.log(remove)
				let trimmed = this.state.subreddits
				console.log(trimmed)
				trimmed.splice(remove, 1)
				trimmed.splice(this.index_to_remove(this.state.correctIndex, this.state.subreddits.length), 1)
				console.log(trimmed)
				this.setState({ subreddits:trimmed})
				
			}
			
		}
		
		
	}
	generate_list = (num_to_gen, total_possible,NSFW=false) => {
		let used_indices = []
		let possible_subreddits = []
		for (let i = 0; i < num_to_gen - 1; i++) {
			let index = Math.floor(Math.random() * Math.floor(total_possible.length));
			if (NSFW == false) {
				while (total_possible[index].NSFW) { index = Math.floor(Math.random() * Math.floor(total_possible.length));}
			}
			if (!used_indices.includes(index)) {
				used_indices.push(index)
				possible_subreddits.push(total_possible[index])
			}
			else {
				continue;
			}

		}
		return possible_subreddits
	}
	index_to_remove=function(correct,total_possible){
		let index = Math.floor(Math.random() * Math.floor(total_possible));
		while (index == correct) {
			index = Math.floor(Math.random() * Math.floor(total_possible));
		}
		console.log(index)
		return index
	}
	render() {
		return (
			<div>
				<div id="image">
					<img src={this.state.imageURL} alt={this.state.displayText}></img>	
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
