import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Error = ({ message }) => {
    if (! message) { return null; }

    return (
        <div className="Error">
            <h2>Uh oh! Error!</h2>
            <p>{ message }</p>
        </div>
    );
};

Error.propTypes = {
    message: PropTypes.string.isRequired
};

export default Error;