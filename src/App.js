import React, { Component } from 'react';
import './App.css';
// import jquery for AJAX requests
import $ from 'jquery';
import Poster from './Poster';
import Search from './Search';

class App extends Component {
	// a super for App - subclass of Component
	constructor(props){
		super(props);
		// initialize state
		this.state = {
			inputValue: '',
			movies: []
		}
		// bind App this to handleSubmit this
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateInput = this.updateInput.bind(this);
	};

	updateInput(value){
		this.setState({
			inputValue: value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		var inputValue = this.state.inputValue;
		var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+ inputValue;
		$.getJSON(url,(movieSearchData)=>{
			// update state on search
			this.setState({
				movies: movieSearchData.results
			})
        })
	}
	
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
		var inputValue = this.state.inputValue.slice().toLowerCase();
		var postersArray = [];
		// First time through (when the component Mounts), this.state.movies will be an empty array
		postersArray = this.state.movies.map((movie,index)=>{
			var movieTitle = movie.title.toLowerCase();
			if(movieTitle.indexOf(inputValue) != -1){
				return(
					<Poster key={index} poster={movie.poster_path} title={movie.title} id={movie.id}/>
				)
			}
		});
		return (
		<div className="App">
			<h1>This is the app...again.</h1>
			<Search updateInput={this.updateInput}/>
			{/* place Posters */}
			{postersArray}
		</div>
		);
	}
}

export default App;

// TODO - add functionality to search bar
