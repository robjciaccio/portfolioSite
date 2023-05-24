import React from 'react'
import MainPhoto from '../../components/MainPhoto/MainPhoto'

const HomePage = () => {
  return (
    <div style={styles.container}>
      <MainPhoto />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#2F4F4F',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default HomePage
