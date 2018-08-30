import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import logo from './logo.svg'

const MyComponent = styled(({className, text}) => {
  return (
    <div className={className}>
      <header className='header'>
        <img src={logo} className='logo' alt='logo' />
        <h1 className='title'>{text}</h1>
      </header>
    </div>
  )
})`
  text-align: center;

  .logo {
    animation: logo-spin infinite 20s linear;
    height: 80px;
  }

  .header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .title {
    font-size: 1.5em;
  }

  @keyframes logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

MyComponent.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

MyComponent.defaultProps = {
  text: 'Hello React!'
}

export default MyComponent
