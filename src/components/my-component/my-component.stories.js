import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import MyComponent from './index'

storiesOf('Welcome', module)
  .add('to Storybook', () => <MyComponent />)
