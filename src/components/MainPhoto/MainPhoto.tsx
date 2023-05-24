import React from 'react'
import Profile from '../../assets/Profile.png'
import Offerings from '../Offerings/Offerings'

const MainPhoto = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#282c34',
          borderRadius: '50%',
          height: 250,
          width: 250,
        }}
      >
        <img src={Profile} style={{ height: 300, zIndex: 1 }} alt='Profile' />
      </div>
      <Offerings />
    </div>
  )
}

export default MainPhoto
