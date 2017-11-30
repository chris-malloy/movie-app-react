import React, { Component } from 'react';
import $ from 'jquery';

class Search extends Component{
    constructor(){
        super();

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event){
        var inputValue = event.target.value;
        this.props.updateInput(inputValue);
    }

    render(){
        return(
            <div className="col-sm-12 text-center">
                <form onSubmit={this.handleSubmit}>
                    Type to Search
                    <input onChange={this.handleInput} id="searchTerm" type="text" placeholder="Movie Title" />
                </form>
            </div>
        )
    }
}

export default Search;