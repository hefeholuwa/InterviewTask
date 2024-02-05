import React from 'react'
import RateCard from '../components/RateCard'

const RateList = ({ rates }) => {
  return (
    <div className="rates-list">
      {rates.map((rate, index) => (
        <RateCard key={index} rate={rate} />
      ))}
    </div>
  )
}

export default RateList
