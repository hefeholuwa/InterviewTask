import React from 'react'
import PropTypes from 'prop-types'
import RateCard from '../components/RateCard'

const RatesList = ({ rates }) => {
  return (
    <div className="rates-list">
      {rates.map((rate, index) => (
        <RateCard key={index} rate={rate} />
      ))}
    </div>
  )
}

RatesList.propTypes = {
  rates: PropTypes.array.isRequired
}

export default RatesList
