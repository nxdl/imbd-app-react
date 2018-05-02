import React, { Component } from 'react';
import {Box} from 'bloomer';
import "./MovieCard.css";

export default class componentName extends Component {
    
    render() {
        return (
            <Box className="MovieCard">
                {this.props.movie.title} 
                <ul>
                <img src={"https://image.tmdb.org/t/p/w342" + this.props.movie.poster_path} width='200' height='300'/>
                </ul>
            </Box>
        )
    }
}
