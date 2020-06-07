import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import Context from './appContext'
import * as serviceWorker from './serviceWorker';
import reducer, { initialState } from './state/reducer'

function RenderApp() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Context.Provider value={{ state, dispatch }}>
          <App />
        </Context.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <RenderApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
