import React from 'react'

const Header = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row' as 'row',
      backgroundColor: '#2F4F4F',
      //   282c34
    },
    headerFont: {
      color: 'white',
      fontSize: 18,
    },
    navButtons: {
      marginRight: 25,
    },
  }
  return (
    <div style={styles.container}>
      <div
        style={{
          width: '30%',
          textAlign: 'left',
          paddingLeft: 30,
        }}
      >
        <p style={styles.headerFont}>Ciaccio</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '70%',
          //   marginLeft: 'auto',
          justifyContent: 'flex-end',
          marginRight: 30,
        }}
      >
        <div style={styles.navButtons}>
          <p style={styles.headerFont}>Home</p>
        </div>
        <div style={styles.navButtons}>
          <p style={styles.headerFont}>About</p>
        </div>
        <div style={styles.navButtons}>
          <p style={styles.headerFont}>Resume</p>
        </div>
        <div style={styles.navButtons}>
          <p style={styles.headerFont}>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Header
