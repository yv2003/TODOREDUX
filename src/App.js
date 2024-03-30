import React from 'react';
import { Provider } from 'react-redux';
import Todos from './components/ToDos.js';
import { store } from './reduxstore';
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
