// import { legacy_createStore as createStore, combineReducers} from 'redux'
import {contacts, filter} from './phoneBook-reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
    storage,
    blacklist: ['filter'],
}

const rootReducer = combineReducers({
    contacts,
    filter,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

// без Toolkit
// const rootReducer = combineReducers({
//     contacts,
//     filter,
// })

// const store = createStore(rootReducer,composeWithDevTools());

//   На Toolkit

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',  // Включает devTools  в версии НЕ в продакшн
    middleware: [logger],  //добавляет прослойку Logger
})

const persistor = persistStore(store);

export default {store, persistor};