import axios from 'axios';

const US_BASE_URL = 'https://us1.locationiq.com/v1/';
const SEARCH_URL = 'search.php';

class LocationIQ {
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl || US_BASE_URL;
    }

    async getLatLon(location) {
        try {
            const response = await axios.get(
                `${this.baseUrl}${SEARCH_URL}`, { params:
                {
                    key: this.apiKey,
                    q: location,
                    format: 'json'
                }});
    
            const { lat: latitude, lon: longitude } = response.data[0];
            return { location, latitude, longitude };
        } catch (error) {
            const message = error.response.data.error;
            throw { message };
        }
    }
}

export default LocationIQ