import React from 'react';
import ResultShape from '../types/ResultShape';
import PropTypes from 'prop-types';
import './History.css';

const History = ({ results }) => {
    return (
        <div className="History">
            <h2>Search History</h2>
            <ul>
            { results.map((result, i) => (
                <li key={i}>
                    <h3>{ result.location }</h3>
                    <span>Latitude: { result.latitude }</span>
                    <span>Longitude: { result.longitude }</span>
                </li>
            )) }
            </ul>
        </div>
    );
};

History.propTypes = {
    results: PropTypes.arrayOf(ResultShape)
};

export default History;