import React from 'react'
import './App.css'
import RateList from './components/RateList'
import FilterContainer from './components/FilterContainer'
import Pagination from './components/Pagination'

function App () {
  const sampleRates = [
    {
      carrier_name: 'ONE',
      origin_port_code: 'INMUN',
      destination_port_code: 'KEMBA',
      sailing_date: '2024-02-05',
      transit_time: '5 days',
      detention_days: 3,
      demurrage_days: 2
    },
    {
      carrier_name: 'OOCL',
      origin_port_code: 'ABC',
      destination_port_code: 'XYZ',
      sailing_date: '2024-02-10',
      transit_time: '7 days',
      detention_days: 4,
      demurrage_days: 3
    },
    {
      carrier_name: 'KEMBA',
      origin_port_code: 'XYZ',
      destination_port_code: 'INMUN',
      sailing_date: '2024-02-15',
      transit_time: '4 days',
      detention_days: 2,
      demurrage_days: 1
    },
    {
      carrier_name: 'INMUN',
      origin_port_code: 'KEMBA',
      destination_port_code: 'ABC',
      sailing_date: '2024-02-20',
      transit_time: '6 days',
      detention_days: 3,
      demurrage_days: 2
    },
    {
      carrier_name: 'XYZ',
      origin_port_code: 'ABC',
      destination_port_code: 'KEMBA',
      sailing_date: '2024-02-25',
      transit_time: '8 days',
      detention_days: 5,
      demurrage_days: 3
    },
    {
      carrier_name: 'ABC',
      origin_port_code: 'INMUN',
      destination_port_code: 'XYZ',
      sailing_date: '2024-03-01',
      transit_time: '5 days',
      detention_days: 3,
      demurrage_days: 2
    },
    {
      carrier_name: 'OOCL',
      origin_port_code: 'KEMBA',
      destination_port_code: 'INMUN',
      sailing_date: '2024-03-05',
      transit_time: '6 days',
      detention_days: 4,
      demurrage_days: 2
    },
    {
      carrier_name: 'ONE',
      origin_port_code: 'XYZ',
      destination_port_code: 'ABC',
      sailing_date: '2024-03-10',
      transit_time: '7 days',
      detention_days: 4,
      demurrage_days: 3
    }
    // Add more sample rates as needed
  ]

  const containerSizes = ['20FT', '40FT']
  const containerTypes = ['dry', 'reefer']
  const carrierNames = [...new Set(sampleRates.map(rate => rate.carrier_name))]

  const handleFilterChange = (filterType, value) => {
    // Implement logic to update API call based on filter changes
    console.log(`Filter changed: ${filterType} - ${value}`)
  }

  const handleLoadMore = () => {
    // Implement logic to fetch and display additional rates
    console.log('Load More clicked')
  }

  return (
    <div className="App">
      <header>
        <h1>Oneport365 Special Rates</h1>
      </header>
      <main>
        <FilterContainer
          containerSizes={containerSizes}
          containerTypes={containerTypes}
          carrierNames={carrierNames}
          onFilterChange={handleFilterChange}
        />
        <RateList rates={sampleRates} />
        <Pagination onLoadMore={handleLoadMore} />

      </main>
    </div>
  )
}

export default App
