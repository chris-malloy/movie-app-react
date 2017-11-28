import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import jquery for AJAX requests
import $ from 'jquery';
import Poster from './Poster';

class App extends Component {
	// a super for App - subclass of Component
	constructor(props){
		super(props);
		// initialize state
		this.state = {
			movies: [],
		}
	};

	// runs one time, before the first render
	componentWillMount(){
		console.log("The component will mount");
	};

	// document.ready --> runs one time, after the first render
	componentDidMount(){
		console.log("the component mounted");
		var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
		$.getJSON(url,(movieData)=>{
			console.log(movieData);
			// this.state = DONT EVER DO THIS. 
			this.setState({
				movies: movieData.results
			})
		});
	};

	render() {
		var postersArray = [];
		// First time through (when the component Mounts), this.state.movies will be an empty array
		this.state.movies.map((movie,index)=>{
			postersArray.push(<Poster key={index} poster={movie.poster_path} title={movie.title} id={movie.id}/>)
		});
		return (
		<div className="App">
			<h1>This is the app...again.</h1>
			{postersArray}
		</div>
		);
	}
}

export default App;
