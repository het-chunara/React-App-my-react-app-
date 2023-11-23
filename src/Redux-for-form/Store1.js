import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './root';

// Define the configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  // Add any additional configuration options if needed
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = createStore(persistedReducer);

// Create a persistor object
const persistor = persistStore(store);

export { store, persistor };
