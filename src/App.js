/* eslint-disable */

import React, { useState, useEffect } from 'react';
import RateCard from './components/RateCard';
import Pagination from './components/Pagination';
import axios from 'axios';
import FilterContainer from './components/FilterContainer'; 
import './App.css';

function App() {
  // State variables
  const [rates, setRates] = useState([]);
  const [filteredRates, setFilteredRates] = useState([]);
  const [selectedCarrier, setSelectedCarrier] = useState('All Carriers');
  const [containerSize, setContainerSize] = useState('20FT');
  const [containerType, setContainerType] = useState('dry');
  const [currentPage, setCurrentPage] = useState(1);
  const [ratesPerPage, setRatesPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(1);
  const [carrierNames, setCarrierNames] = useState([]);

  // Fetch data from the API on component mount and when filters change
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API based on container size and type
        const response = await axios.get(
          `https://test-api.oneport365.com/api/live_rates/get_special_rates_no_auth?container_size=${containerSize}&container_type=${containerType}`
        );

        // Extract unique carrier names and set state variables
        const uniqueCarrierNames = response.data?.data?.rates?.map((rate) => rate.carrier_name);
        setCarrierNames(['All Carriers', ...new Set(uniqueCarrierNames)]);
        setRates(response.data?.data?.rates || []);
        setFilteredRates(response.data?.data?.rates || []);
        setTotalPages(Math.ceil(response.data?.total_rates / ratesPerPage) || 1);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [ratesPerPage, containerSize, containerType]);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    let filteredRatesCopy = [...rates];

    if (filterType === 'containerSize') {
      setContainerSize(value);
    } else if (filterType === 'containerType') {
      setContainerType(value);
    } else if (filterType === 'carrierName') {
      setSelectedCarrier(value);
      // Filter rates based on the selected carrier
      filteredRatesCopy = rates.filter((rate) => value === 'All Carriers' || rate.carrier_name === value);
    }

    setFilteredRates(filteredRatesCopy);
  };

  // Load more rates
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // JSX rendering
  return (
    <div className="App">
      <header>
        <h1>Oneport365 Special Rates</h1>
      </header>
      <main>
        {/* FilterContainer component for handling filters */}
        <FilterContainer
          containerSizes={['20FT', '40FT']}
          containerTypes={['dry', 'reefer']}
          onFilterChange={handleFilterChange}
          rates={rates}
          selectedCarrier={selectedCarrier}
          setCarrierNames={setCarrierNames}
        />

        {/* Display rates based on filters */}
        {filteredRates ? (
          filteredRates.length > 0 ? (
            <>
              <div className="selected-carrier">Selected Carrier: {selectedCarrier}</div>
              {filteredRates
                .slice(0, currentPage * ratesPerPage)
                .map((rate, index) => (
                  <RateCard key={index} rate={rate} />
                ))}
              {currentPage * ratesPerPage < filteredRates.length && (
                <Pagination onLoadMore={handleLoadMore} />
              )}
            </>
          ) : (
            <p>No rates matching the filters.</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default App;
