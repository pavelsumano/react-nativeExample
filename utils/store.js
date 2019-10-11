import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from '../src/reducers/videos';

// const store = createStore(reducer, {
//   categoryList: [],
//   suggestionList: [],
// });
// agregamos el @react-native-community/async-storage
// seguir los pasos de documentacion para que funcione

const persistConfig = {
  key: 'root',
  timeout: null,
  storage: AsyncStorage,
  blacklist: ['selectedMovie'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
