import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import imagesReducer from './store/images.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images: imagesReducer
  },
});
