import subreddits_json from '../api/parsed_subreddits.json'
import axios from 'axios';
import { logging } from 'react-server'
const logger = logging.getLogger(__LOGGER__);
export default class gameHandler{

    constructor(num_to_gen_val, rounds, page) {
        this.rounds = rounds;
        this.roundsDone = 1;
        this.num_to_gen_val = num_to_gen_val;
        this.subreddits_arr = subreddits_json.subreddits
        
        
    }
    generate_list = (num_to_gen, total_possible, NSFW = false) => {
        let used_indices = []
        let possible_subreddits = []
        for (let i = 0; i < num_to_gen ; i++) {
            let index = Math.floor(Math.random() * Math.floor(total_possible.length));
            if (NSFW == false) {
                while (total_possible[index].NSFW) { index = Math.floor(Math.random() * Math.floor(total_possible.length)); }
            }
            while(used_indices.includes(index)) {
                index = Math.floor(Math.random() * Math.floor(total_possible.length));
            }
            used_indices.push(index)
            possible_subreddits.push(total_possible[index])
        }
        return possible_subreddits
    }
    getList = function (page, newpage=false) {
        this.listed = this.generate_list(this.num_to_gen_val, this.subreddits_arr)
        let index = Math.floor(Math.random() * Math.floor(this.num_to_gen_val - 1))
        this.correct = { index: index, name: encodeURI(this.listed[index].URL) };
        logger.debug(`Correct is ${this.correct.name}, at index ${this.correct.index} in `)
        logger.debug(this.listed)
        if (newpage) {
            page.state = {
                subreddits: this.listed, imageURL: 'None', displayText: 'Starting', correct: this.correct.name,
                correctIndex: this.correct.index, pointsTemp: 10, points: 0
            }
        }
        else {
            page.setState({
                subreddits: this.listed, imageURL: 'None', displayText: 'Starting', correct: this.correct.name,
                correctIndex: this.correct.index
            })
        }
        
        this.getContent(page)
    }
    getContent = function (page,start=false) {
        axios.get(`/api/fetch?url=${this.correct.name}`)
            .then((response) => {
                let source = response.data
                if (source.type == 'article') {
                    page.setState({displayText:source.content} )
                }
                if (source.type == 'image') {
                    page.setState({imageURL: source.content })
                }
                if (source.type == 'self') {
                    let content = source.content;
                    page.setState({displayText:content})
                }
                
                logger.debug(source);
                 
            })
            .catch(function (error) {
                logger.debug(error);
            });
        
    }
    index_to_remove = function (correct, total_possible) {
        let index = Math.floor(Math.random() * Math.floor(total_possible-1));
        while (index == correct) {
            index = Math.floor(Math.random() * Math.floor(total_possible-1));
        }
        logger.debug(index)
        return index
    }
    select = function (name,page) {
        logger.info(`Selected ${name} correct was ${this.correct.name}`);
        if (this.correct.name.includes(name)) {
            this.getList(page)
            this.getContent(page)
            this.roundsDone+=1;
            if (this.roundsDone == this.rounds+1) {
                page.setState({ points: 0, pointsTemp: 10 })
            }
            else {
                page.setState({ points: (page.state.points + page.state.pointsTemp), pointsTemp: 10 })
            }
            //logger.debub(`Points:${}, pointsTemp`)
            
        }
        else {
            
            let names = this.listed.map((subreddit) => subreddit.name)
            let remove = names.indexOf(name)
            logger.debug(remove)
            let trimmed = this.listed
            logger.debug(trimmed)
            trimmed.splice(remove, 1)
            //trimmed.splice(this.index_to_remove(this.correctIndex, this.listed.length), 1)
            logger.debug(trimmed)
            this.listed = trimmed;
            page.setState({ subreddits: this.listed,pointsTemp:page.state.pointsTemp-1 })
            
        }
        
        
        
    }
}