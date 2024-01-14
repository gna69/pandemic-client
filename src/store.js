import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './app/counter/store';
import mapReducer from './app/map/store';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mapper: mapReducer
  },
})