import React from 'react';
import ResultShape from '../types/ResultShape';
import './Result.css';

const Result = ({ result }) => {
    return (
        <div className="Result">
            <h2>Results for: { result?.location }</h2>
            <ul>
                <li>Latitude: { result?.latitude }</li>
                <li>Longitude: { result?.longitude }</li>
            </ul>
        </div>
    );
};

Result.propTypes = {
    result: ResultShape
};

export default Result;