import React, { Component } from 'react';

class MovieList extends Component{
    constructor(props){
        super(props)
        this.state = {
            movie : props.movie,
            i : props.i
        }
    }
    render() {
        return (
        <tr key={this.state.movie.name + this.state.i}>
            <td>{this.state.movie.id}</td>
            <td>{this.state.movie.title}</td>
            <td>{this.state.movie.rating}</td>
            <td>{this.state.movie.awards}</td>
            <td>{this.state.movie.length}</td>
        </tr>
        );
    }
}

export default MovieList;
