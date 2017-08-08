import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import Routes from './routes';

let store = createStore(reducers)

render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('root')
)
