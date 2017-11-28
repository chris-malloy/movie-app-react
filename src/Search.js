import React, { Component } from 'react';

class Search extends Component{
    render(){
        return(
            <form action="linkPath">
                <input type="text" name="search" />
                <button className="btn btn-primary">Search</button>
            </form>
        )
    }
}

export default Search;