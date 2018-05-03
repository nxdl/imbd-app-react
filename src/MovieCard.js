import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Box} from 'bloomer';
import "./MovieCard.css";

export default class MovieCard extends Component {
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

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
    }),
}
