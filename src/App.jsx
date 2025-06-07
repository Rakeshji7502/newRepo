import React from 'react'
import { createStore } from 'redux'
import BookContainer from './BookContainer';
import bookReducer from './Book Reducer';
import { Provider } from 'react-redux';
const App = () => {
 const mystore= createStore(bookReducer);
  return (
    <div>
      <Provider store = {mystore}>
      <BookContainer />
      </Provider>
    </div>
  )
}

export default App;
