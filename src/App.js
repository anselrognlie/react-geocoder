import React, { useState } from 'react';
import './App.css';
import LocationSearch from './components/LocationSearch';
import Result from './components/Result';
import History from './components/History';
import Error from './components/Error';
import LocationIQ from './api/LocationIQ';

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const addResult = (result) => {
    setResults(current => {
      return [...current, result];
    });
  };

  const clearError = () => { setError(null); };

  const performSearch = async (location) => {
    clearError();
    const api = new LocationIQ(apiKey);
    try {
      const result = await api.getLatLon(location);
      addResult(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const locationSubmitted = (location) => {
    performSearch(location);
  };

  const singleResult = results[results.length - 1];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Latitude and Longitude</h1>
        <LocationSearch onLocationSubmitted={locationSubmitted} />
      </header>
      <main>
        <Result result={singleResult} />
        <Error message={error} />
        <History results={results} />
      </main>
    </div>
  );
}

export default App;
