import PropTypes from 'prop-types';

const ResultShape = PropTypes.shape({
    location: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
});

export default ResultShape