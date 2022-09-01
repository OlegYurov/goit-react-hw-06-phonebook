import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
import store from './components/Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <>
    <div className="container">
            <Provider store={store.store}>
          < PersistGate loading={null} persistor={store.persistor}>
          <App />
          </PersistGate>
        </Provider>
      </div>
    </>
  
    
  // </React.StrictMode>
);

