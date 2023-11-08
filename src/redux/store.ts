import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/rootSagas';
import rootReducer from './reducers/userReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'nproot',
  storage,
  blacklist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(
//   persistedReducer,
//   applyMiddleware(sagaMiddleware)
// );

// export let store = createStore(
//   persistedReducer,
//   applyMiddleware(sagaMiddleware)
// );
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export let persistor = persistStore(store)

