import React from 'react';
import dynamic from 'next/dynamic'
const GameLoader = dynamic(
	import('../components/game'),
	{
		loading: () => <p>Loading</p>
	}
)

export default class Game extends React.Component{
	render() {
		return <div>
			<GameLoader />
			<style global jsx>{`
      html, body {
        margin:0;
        padding: 0;
      }
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      html,body{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: "Roboto";
      }
      ul {
        margin-top: 0;
      }`}
			</style>
			</div>;
			}
		
	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}
