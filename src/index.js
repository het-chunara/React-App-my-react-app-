import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import {persistor } from './Redux-for-form/Store1'
import { PersistGate } from "redux-persist/integration/react";
// import Navbar from './Navbar';
import { BrowserRouter } from "react-router-dom";
// import MultiStepForm from "./Multi-step-form/MultiStepForm";
// Importing both store and persistor from 'Store1'
// import {store} from "./Redux-for-form/Store1";
import { store,persistor } from "./Shopping/Redux-shop/store";
import App3 from "./Shopping/App3";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
 
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App3/>
      </BrowserRouter>
      </PersistGate>
    
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
