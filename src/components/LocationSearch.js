import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LocationSearch.css';

const makeDefaultState = () => {
    return {
        location: ''
    };
};

const LocationSearch = ({ onLocationSubmitted }) => {
    const [formValues, setFormValues] = useState(makeDefaultState);

    const textInput = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        setFormValues(current => {
            return { ...current, [fieldName]: value };
        });
    };

    const formSubmitted = (event) => {
        event.preventDefault();
        onLocationSubmitted(formValues.location);
    };

    return (
        <div className="LocationSearch">
            <form onSubmit={formSubmitted}>
                <input type="text" name="location" value={formValues.location} onInput={textInput} />
                <input type="submit" value="Search Now!" />
            </form>
        </div>
    );
};

LocationSearch.propTypes = {
    onLocationSubmitted: PropTypes.func.isRequired
};

export default LocationSearch;
