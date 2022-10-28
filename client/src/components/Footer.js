import React from 'react'


const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <p>&copy; {`Eric Johnson Media ${date.getFullYear()}`}</p>
    </footer>
  )
}

export default Footer