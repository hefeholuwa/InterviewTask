// App.js
import React, { useState, useEffect } from 'react';
import RateList from './components/RateList';
import FilterContainer from './components/FilterContainer';
import CarrierFilter from './components/CarrierFilter';
import _ from 'lodash';

function App() {
  const [rates, setRates] = useState([]);
  const [containerSize, setContainerSize] = useState('20FT');
  const [containerType, setContainerType] = useState('dry');
  const [carrierFilter, setCarrierFilter] = useState('');

  // Dummy data for testing
  const dummyRates = [
    {
      special_rate_id: '1',
      carrier_name: 'ONE',
      origin_port_code: 'INMUN',
      destination_port_code: 'KEMBA',
      sailing_date: '2024-02-10',
      transit_time: '12',
      detention_days: 7,
      demurrage_days: 7,
    },
    {
      special_rate_id: '2',
      carrier_name: 'OOCL',
      origin_port_code: 'SHANGHAI',
      destination_port_code: 'LOSANGELES',
      sailing_date: '2024-02-15',
      transit_time: '15',
      detention_days: 10,
      demurrage_days: 5,
    },
    {
      special_rate_id: '3',
      carrier_name: 'KEMBA',
      origin_port_code: 'LOSANGELES',
      destination_port_code: 'INMUN',
      sailing_date: '2024-02-20',
      transit_time: '10',
      detention_days: 5,
      demurrage_days: 10,
    },
    // Add more dummy data as needed
  ];

  // Throttle the API call to once every 500 milliseconds
  const throttledFetchRates = _.throttle(() => {
    // Simulate API call with dummy data
    setRates(dummyRates);
  }, 500);

  useEffect(() => {
    throttledFetchRates();
  }, [containerSize, containerType]);

  return (
    <div>
      {/* Filter Container Component */}
      <FilterContainer
        containerSize={containerSize}
        containerType={containerType}
        setContainerSize={setContainerSize}
        setContainerType={setContainerType}
      />

      {/* Carrier Filter Component */}
      <CarrierFilter carriers={rates.map((rate) => rate.carrier_name)} setCarrierFilter={setCarrierFilter} />

      {/* Rate List Component */}
      <RateList rates={rates} carrierFilter={carrierFilter} />
    </div>
  );
}

export default App;
