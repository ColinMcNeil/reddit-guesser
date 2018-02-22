import React from 'react';
import { logging } from 'react-server';
import axios from 'axios';
export default class SimplePage{
    setConfigValues() {
        return { isRawResponse: true };
    }
    handleRoute() {
        let url = this.getRequest().getUrl().split('?url=')[1];
        console.log(decodeURI(url))
        let responseContent='None'
        this.resPromise = axios.get(`https://reddit.com${url}random.json`, { crossdomain: true })
        return {code:200};
    }
    getContentType() {
        return 'text/plain';
    }

    getResponseData(next) {
        return this.resPromise.then(function (response) {
            let responseContent = 'None'
            let type='None'
            if (!response) {
                console.log('No response')
            }
            if (!response.data[0]) {
                console.log('No response')
                console.log(response)
            }

            console.log(response.data[0].data.children[0])
            let post = response.data[0].data.children[0].data;

            if (post.selftext != '') {
                responseContent = post.selftext
                type='self'
            }
            else if ('preview' in post) {
                responseContent = decodeURI(post.preview.images[0].source.url)
                type='image'
            }
            else {
                responseContent = post.title + ' from ' + post.domain;
                type='article'
            }
            console.log(responseContent)
            return JSON.stringify({ type:type,content:responseContent.split('&amp;').join('&') })
        })
            .catch(function (error) {
                return error;
            });
    }
}

