// The very frist thing in most components is to import react
import React, { Component } from 'react';

// presentational component
class Poster extends Component{
    render(){
        var imagePath = `http://image.tmdb.org/t/p/w300${this.props.poster}`;
        return(
            <div className="col-sm-3">
                <img src={imagePath} alt="poster"/>
            </div>
        )
    }
}

export default Poster;