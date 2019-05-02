import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import router from './router'
import Navbar from './components/Navbar'

function App() {
  return (

    <Provider store={store}>
    <HashRouter>
      <Navbar/>
      {router}
      </HashRouter>
      </Provider>
  );
  }

export default App;
