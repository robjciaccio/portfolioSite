import React from 'react'
import OfferTile from '../OfferTile/OfferTile'

const Offerings = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: 500,
        height: 60,
        borderWidth: 1,
        borderColor: '#282c34',
        borderStyle: 'solid',
        zIndex: 2,
        position: 'relative',
        backgroundColor: '#282c34',
        right: '30%',
        borderRadius: 6,
        boxShadow: '0px -6px 6px rgba(0,0,0, 0.3)',
      }}
    >
      <div style={{ width: '25%' }}>
        <OfferTile title='Mobile Apps' />
      </div>
      <div style={{ width: '25%' }}>
        <OfferTile title='Websites' />
      </div>
      <div style={{ width: '25%' }}>
        <OfferTile title='Servers' />
      </div>
      <div style={{ width: '25%' }}>
        <OfferTile title='Databases' />
      </div>
    </div>
  )
}

export default Offerings
