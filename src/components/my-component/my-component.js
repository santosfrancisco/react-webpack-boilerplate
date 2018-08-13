import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

export default styled(({className}) => {
  return (
    <div className={className}>
      <header className='header'>
        <img src={logo} className='logo' alt='logo' />
        <h1 className='title'>Webpack4 + React</h1>
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
