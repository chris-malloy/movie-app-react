// The very frist thing in most components is to import react
import React, { Component } from 'react';

// presentational component
class Poster extends Component{
    render(){
        var imagePath = `http://image.tmdb.org/t/p/w300${this.props.poster}`;
        var linkPath = `https://www.themoviedb.org/movie/${this.props.id}`;
        return(
            <div className="col-sm-3">
                <a href={linkPath}><img src={imagePath} alt="poster"/></a>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Poster;