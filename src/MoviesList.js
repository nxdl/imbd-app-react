import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from  "./MovieCard"


export default class MoviesList extends Component {    
    render() {
        
        return (
            <div>
                {this.props.movies.
                    map (m => <MovieCard movie={m}/>)}
            </div>
        )
    }
}

MoviesList.propTypes = {
    movies: PropTypes.array,
}