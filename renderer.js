// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import studyApp from './reducers'

//TODO create an app component using other react components
import App from './components/App'
 
let store = createStore(studyApp);
window.store = store;

//TODO create a render function to display the app component
ReactDOM.render(
   <Provider store={store}>
   <App />
   </Provider>,
   document.getElementById('root')
 )
