import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import counterReducer from './features/counter/counterSlice';
import imageSelectorReducer from './store/image-selector.slice'

const persistConfig = {
  key: 'root',
  storage,
  
}

const rootReducer = combineReducers({
  counter: counterReducer,
  imageSelector: imageSelectorReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});
export const persistor = persistStore(store)