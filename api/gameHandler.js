import subreddits_json from './parsed_subreddits.json'
import axios from 'axios';
import {logging} from 'react-server'
const logger = logging.getLogger(__LOGGER__);
export default class gameHandler{

    constructor(num_to_gen_val) {
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
    getList = function (page) {
        this.listed = this.generate_list(this.num_to_gen_val, this.subreddits_arr)
        let index = Math.floor(Math.random() * Math.floor(this.num_to_gen_val - 1))
        this.correct = { index: index, name: encodeURI(this.listed[index].URL) };
        console.log(`Correct is ${this.correct.name}, at index ${this.correct.index} in ${this.listed.toString()}`)
        page.state={
            subreddits: this.listed, imageURL: 'None',displayText: 'Starting', correct: this.correct.name,
            correctIndex: this.correct.index
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
                    page.setState({displayText:source.content })
                }
                
                console.log(source);
                 
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    index_to_remove = function (correct, total_possible) {
        let index = Math.floor(Math.random() * Math.floor(total_possible-1));
        while (index == correct) {
            index = Math.floor(Math.random() * Math.floor(total_possible-1));
        }
        console.log(index)
        return index
    }
    select = function (name,page) {
        logger.info(`Selected ${name} correct was ${this.correct.name}`);
        if (this.correct.name.includes(name)) {
            this.getList(page)
            this.getContent(page)
        }
        else {
            let names = this.listed.map((subreddit) => subreddit.name)
            let remove = names.indexOf(name)
            console.log(remove)
            let trimmed = this.listed
            console.log(trimmed)
            trimmed.splice(remove, 1)
            trimmed.splice(this.index_to_remove(this.correctIndex, this.listed.length), 1)
            console.log(trimmed)
            this.listed = trimmed;
            page.setState({ subreddits: this.listed })
        }
        
    }
}