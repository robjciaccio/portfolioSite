import React from 'react'

interface Props {
  title: string
}

const OfferTile = ({ title }: Props) => {
  return (
    <div
      style={{
        borderStyle: 'solid',
        // borderColor: 'white',
        borderWidth: 0.2,
        height: 45,
        margin: '8%',
        borderRadius: 4,
        backgroundColor: '#2F4F4F',
      }}
    >
      <p style={{ color: 'white', fontSize: 14 }}>{title}</p>
    </div>
  )
}

export default OfferTile
